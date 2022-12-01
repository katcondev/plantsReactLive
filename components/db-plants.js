import React from 'react'
import Script from 'next/script'
import AT from '../pages/api/at'
import Image from "next/image"

export default function dbPlts() {
  const plant = []
  return (
    <div className="mx-auto py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Script src={AT} />
    dbPlts 
    
    <Image src="/${plant[i].fields.Image[0].thumbnails.large.url}" layout='fill' />
      <p>${plant.fields.Name}</p>          
    
    </div>
  )
}
