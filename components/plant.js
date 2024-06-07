import React, { useState, useEffect } from "react";
import Image from "next/image";

const IndexPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}/Plants?filterByFormula=AND(Approved)`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AT_KEY}`,
          },
        }
      );
      const json = await res.json();
      setData(json.records);
    }
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap mx-auto max-w-7xl'>
      {data && data.length > 0 ? (
        data.map((record) => (
          <div key={record.id} className=' p-4'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'>
              <Image
                src={record.fields.Image[0].url}
                width={record.fields.Image[0].width}
                height={record.fields.Image[0].height}
                layout='responsive'
                alt='list of plants'
              />
              <div className='px-6 py-2'>
                <div className='font-bold text-2xl mb-2'>
                  {record.fields.ComName}
                </div>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Personality:</span>{" "}
                  {record.fields.Personality}
                </p>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Scientific Name:</span>{" "}
                  {record.fields.Name}
                </p>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Type of Lighting:</span>{" "}
                  {record.fields.Lighting}
                </p>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Water Care:</span>{" "}
                  {record.fields.WaCare}
                </p>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Soil Care:</span>{" "}
                  {record.fields.SoCare}
                </p>
                <p className=' font-Novel text-xl py-2'>
                  <span className='font-bold'>Care Instructions:</span>{" "}
                  {record.fields.Care}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center'>updating records...</p>
      )}
    </div>
  );
};

export default IndexPage;
