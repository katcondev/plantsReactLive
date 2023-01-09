import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export function PlantsCommunity({ id, fields }) {
  return (
    <div>
      {fields?.Image && (
        <Image width="400" height="400" alt="photo of plant" src={fields.Image[0]?.url} />
      )}
      <a href={fields.Care}>
        <h2 className="text-lg font-semibold text-slate-500">{fields.Name}</h2>
      </a>
    </div>
  );
}

export default function Home({ records }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 leading-tight">
        Plants Database
      </h1>
      <Link href="/new" className="bg-slate-500 text-white px-5 py-4 shadow-md">
        Add a Community
      </Link>
      <div className="grid grid-cols-3 grid-gap-3">
        {records.map((record, key) => (
          <PlantsCommunity key={key} {...record} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  async function retrieveRecords() {
    const { data } = await axios.get("https://eoqgu8745vukqaz.m.pipedream.net");

    return data;
  }

  const records = await retrieveRecords();

  return {
    props: { records }, // will be passed to the page component as props
  };
}