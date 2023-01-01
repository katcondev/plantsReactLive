import React from 'react'
import Script from 'next/script'

import Image from "next/image"
import { data } from 'autoprefixer'

export default function dbPlts() {
  const plant = []
  return (
    <div className="mx-auto py-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <pre>
        <code>
          {plants && JSON.stringify(plants, null, 4)}
        </code>
      </pre>
    
    {/* <Image src=${plant[i].fields.Image[0].thumbnails.large.url} layout='fill' /> */}
              
    
    </div>
  )
}
