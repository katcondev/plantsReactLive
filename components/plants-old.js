import React, { useEffect, useState } from "react";
import Image from 'next/image';


export default function PlantDB() {
    let [plants, setPlants] = React.useState('');

    const fetchData = React.useCallback(() => {
      const requestUrl = "https://api.airtable.com/v0/appFj2Envr91ItMKQ/Plants";

      fetch(requestUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer keykEQO9bMo2Fukln`,
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
{/* <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    {plants.length > 0 ? (
      plants.map((plant) => (
        <div key={plant.id} className="rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div>
                    <Image key={plant.id} src={plant.fields.Image[0].url} width={plant.fields.Image[0].width} height={plant.fields.Image[0].height} layout="responsive" alt="list of plants" />
                </div>
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
  </div> */}


  )
}
