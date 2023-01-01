import React, { useEffect, useState } from "react";
const token = "keykEQO9bMo2Fukln";
import "../styles/globals.css";
import "../styles/tailwind.css";


export default function App() {
  let [plants, setPlants] = React.useState('');

  const fetchData = React.useCallback(() => {
    const requestUrl = "https://api.airtable.com/v0/appFj2Envr91ItMKQ/Plants";

    fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
    <div className="App">
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
        <button type='button' onClick={fetchData}>Click for Data</button>
      </header>
      {/* <main>
        {plants &&
          <blockquote>
           
            <small>{plants && plants.originator && plants.originator.name}</small>
          </blockquote>
        }
        </main> */}
      <pre>
        <code>
          {plants && JSON.stringify(plants, null, 4)}
        </code>
      </pre>
    </div>
    )
}