import React, { useEffect, useState } from "react";
import Image from 'next/image';


export default function PlantDB() {
    let [plants, setPlants] = React.useState('');

    const fetchData = React.useCallback(() => {
      const requestUrl = "https://api.airtable.com/v0/appFj2Envr91ItMKQ/Plants";

      fetch(requestUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AT_KEY}`,
      },
  })
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ setPlants ]);
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
<div className="flex flex-row">
    {plants.length > 0 ? (
      plants.map((plant) => (
        <div key={plant.id} className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                
                <div className="px-6 py-4">
                  <div key={plant.id} className="font-bold text-xl mb-2">Name: {plant.fields.Name}</div>
                    <p className="text-gray-700 text-base">
                   Personality: {plant.fields.Personality}
                    </p>
                    <p className="text-gray-700 text-base">
                   Image: {plant.fields.Image[0].filename}
                    </p>
                </div>
                <div key={plant.id} className="px-6 pb-5">
                  <a>Care: {plant.fields.Care}</a>
                </div>
            </div>
      ))
    ) : (
      <p>Fetching Data...</p>
    )}
  </div>
  )
}
