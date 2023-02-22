import React, { useState, useEffect } from "react";
import Image from "next/image";
import Autosuggest from "react-autosuggest";

const SIndexPage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}/Plants`,
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

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : data.filter((record) =>
          Object.values(record.fields).some(
            (field) =>
              typeof field === "string" &&
              field.toLowerCase().includes(inputValue)
          )
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.fields.ComName;

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.fields.ComName}</div>
  );

  useEffect(() => {
    setFilteredData(
      data.filter((record) =>
        Object.values(record.fields).some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm, data]);

  return (
    <div className='flex flex-col items-center'>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) =>
          setSuggestions(getSuggestions(value))
        }
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          className: "border border-gray-400 rounded p-2 w-64",
          type: "text",
          value: searchTerm,
          onChange: (event, { newValue }) => setSearchTerm(newValue),
          placeholder: "Search",
        }}
      />
      <div className='flex flex-wrap'>
        {filteredData.length > 0 ? (
          filteredData.map((record) => (
            <div
              key={record.id}
              className='mx-auto py-6 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 h-{400}'
            >
              <div className='max-w-sm py-6 rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'>
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
                  <p className='text-base py-2'>
                    <span className='font-bold'>Personality:</span>{" "}
                    {record.fields.Personality}
                  </p>
                  <p className='text-base py-2'>
                    <span className='font-bold'>Scientific Name:</span>{" "}
                    {record.fields.Name}
                  </p>
                  <p className='text-base py-2'>
                    <span className='font-bold'>Type of Lighting:</span>
                    {""}
                    {record.fields.Lighting}
                  </p>
                  <p className='text-base py-2'>
                    <span className='font-bold'>Water Care:</span>{" "}
                    {record.fields.WaCare}
                  </p>
                  <p className='text-base py-2'>
                    <span className='font-bold'>Soil Care:</span>{" "}
                    {record.fields.SoCare}
                  </p>
                  <p className='text-base py-2'>
                    <span className='font-bold'>Care Instructions:</span>{" "}
                    {record.fields.Care}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-xl font-bold py-6'>
            Updating records...
          </p>
        )}
      </div>
    </div>
  );
};

export default SIndexPage;
