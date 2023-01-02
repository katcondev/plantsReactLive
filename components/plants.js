import React, { useEffect, useState, useCallback } from "react";
import Image from 'next/image';



export default function PlantDB() {
    let [plants, setPlants] = useState('');

    const fetchData = useCallback(() => {
      const requestUrl = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}/Plants`;

      fetch(requestUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AT_KEY}`,
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
  
  useEffect(() => {
    fetchData()
  }, [fetchData])
 
  return (
   <div className="mx-auto py-6 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 h-{400} ">
     {plants.length > 0 ? (
     plants.map((plant) => (
       <div key={plant.id} className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
       
       <Image key={plant.id} src={plant.fields.Image[0].url} width={plant.fields.Image[0].width} height={plant.fields.Image[0].height} layout="responsive" alt="list of plants" />
       
         <div className="px-6 py-2">
           <div className="font-bold text-2xl mb-2">{plant.fields.ComName}</div>
             <p className="text-base py-2">
             <span className="font-bold">Personality:</span> {plant.fields.Personality}
             </p>
             <p className="text-base py-2">
             <span className="font-bold">Scientific Name:</span> {plant.fields.Name}
             </p>
             <p className="text-base py-2">
             <span className="font-bold">Type of Lighting:</span> {plant.fields.Lighting}
             </p>
             <p className="text-base py-2">
             <span className="font-bold">Water Care:</span> {plant.fields.WaCare}
             </p>
             <p className="text-base py-2">
             <span className="font-bold">Soil Care:</span> {plant.fields.SoCare}
             </p>
             <p className="text-base py-2">
             <span className="font-bold">Care Instructions:</span> {plant.fields.Care}
             </p>
         </div>
       
   </div>
 ))
 ) : (
      <p>Fetching Data...</p>
    )}


  </div> 

  )
}
