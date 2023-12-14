import React, { useState } from "react";
import Airtable from "airtable";
import AWS from "aws-sdk";

const awsKey = process.env.NEXT_PUBLIC_AWS_KEY;
const awsAccess = process.env.NEXT_PUBLIC_AWS_ACCESS;
const atKey = process.env.NEXT_PUBLIC_AT_KEY;
const atBase = process.env.NEXT_PUBLIC_BASE_ID;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    personality: "",
    care: "",
    comName: "",
    lighting: "",
    waCare: "",
    soCare: "",
  });

  const [image, setImage] = useState({});

  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  const handleChange = (event) => {
    if (event.target.type === "file") {
      const selectedFile = event.target.files[0];

      // Check if the selected file is an image and has a valid extension
      if (
        selectedFile &&
        !["image/jpeg", "image/jpg"].includes(selectedFile.type)
      ) {
        setMessage({
          type: "failed",
          content: "Please select a valid JPEG or JPG image.",
        });
        return;
      }

      setImage({
        file: selectedFile,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image.file) {
      setMessage({
        type: "failed",
        content: "Please select an image to upload.",
      });
      return;
    }

    const s3 = new AWS.S3({
      accessKeyId: awsKey,
      secretAccessKey: awsAccess,
    });

    const file = image.file;
    const fileName = file.name;
    const fileType = file.type;

    const params = {
      Bucket: "whats-goods",
      Key: fileName,
      Body: file,
      regiion: "us-west-1",
    };

    try {
      const uploadResponse = await s3.upload(params).promise();
      const imageUrl = uploadResponse.Location;

      const base = new Airtable({
        apiKey: atKey,
      }).base(atBase);

      const record = await base("Plants").create(
        {
          Name: formData.name,
          Personality: formData.personality,
          Care: formData.care,
          ComName: formData.comName,
          Lighting: formData.lighting,
          WaCare: formData.waCare,
          SoCare: formData.soCare,
          Image: [
            {
              url: imageUrl,
            },
          ],
        },
        { typecast: true }
      );

      setMessage({
        type: "success",
        content: "Record created successfully!",
      });
    } catch (error) {
      setMessage({
        type: "failed",
        content: "Error uploading image or creating record: " + error.message,
      });
    }

    if (message.type === "success") {
      setFormData({
        name: "",
        personality: "",
        care: "",
        comName: "",
        lighting: "",
        waCare: "",
        soCare: "",
      });
      setImage({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='py-16 uppercase text-lg font-Novel'
    >
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='personality'>
          Personality
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='personality'
          name='personality'
          value={formData.personality}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium' htmlFor='image'>
          Image
        </label>
        <input
          type='file'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='image'
          name='image'
          onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='care'>
          Care
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='care'
          name='care'
          value={formData.care}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='comName'>
          Common Name
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='comName'
          name='comName'
          value={formData.comName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='lighting'>
          Lighting
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='lighting'
          name='lighting'
          value={formData.lighting}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='waCare'>
          Water Care
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='waCare'
          name='waCare'
          value={formData.waCare}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2' htmlFor='soCare'>
          Soil Care
        </label>
        <input
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='soCare'
          name='soCare'
          value={formData.soCare}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type='submit'
        className='uppercase inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green px-4 py-2 mt-6 text-base font-medium text-white shadow-sm hover:bg-green-700'
      >
        Submit
      </button>
      {message.type === "success" && (
        <p className='mt-4 text-green-600'>{message.content}</p>
      )}
      {message.type === "failed" && (
        <p className='mt-4 text-red-600'>{message.content}</p>
      )}
    </form>
  );
};

export default Form;
