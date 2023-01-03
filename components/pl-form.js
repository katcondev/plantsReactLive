
import React, { useState } from "react"
import { useRouter } from "next/router";

export default function Contact() {
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")
    const router = useRouter()
    

    const handleInput = (e) => {
        const copyFormData = { ...formData }
        copyFormData[e.target.name] = e.target.value
        setFormData(copyFormData)
    }

    const sendData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `https://api.airtable.com/v0/apphid3mzUCCadQb6/test`,
                {
                    method: "post",
                    body: JSON.stringify([formData]),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AT_KEY}`,
                    },
                }
            )
            const json = await response.json()
            console.log("Success:", JSON.stringify(json))
            setMessage("Thank you for your submission.  We will get back to you soon.")
            
            
        } catch (error) {
            console.error("Error:", error)
            setMessage("Error")
        }
        setTimeout(() => {router.push('/')}, 5000)
        
        
    } 
  return (
    <div className='container mx-auto mb-10 mt-10 px-5'>
      <main>
      
    <form required onSubmit={sendData} className='px-auto pl-10 pr-10 pb-20 pt-10 space-y-8 divide-y divide-gray-200 bg-white' >
        <div className='space-y-8 divide-y divide-gray-200'>
            <div className='pt-8'>
              <div className="mx-auto mb-10">
              
              
              <div>
                <h3 className='text-2xl mb-5 font-medium text-gray-900'>
                Fill out this form to submit to our database.
                </h3>
              </div>

              <input
                    name="fldIRQFelfCmtmxcc" // name should matched with your airtable table field
                    type="text"
                    placeholder="Name"
                    className="block w-full mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleInput}
                />
                <input
                    name="fld7qLfJkfzA3iUwA" // name should matched with your airtable table field
                    type="email"
                    placeholder="Email"
                    className="block w-full mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleInput}
                />
                <textarea
                    name="fldBP6ezNPz9oYZ6p" // name should matched with your airtable table field
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Message"
                    onChange={handleInput}
                />
                 
                <select
                    name="fld64XOaCSZbiRXTJ"
                    type='Single select'
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue="United States"
                    onChange={handleInput}
                    >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                
               
                   
             </div>
          </div>
        </div> 
        <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='button'
                className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Cancel
              </button>
              <button
                type='submit'
                value="Send"
                className='ml-3 inline-flex justify-center rounded-sm border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Submit
              </button>
             
            </div>
            <div className="mt-5 text-3xl text-orange-600">{message}</div>
            
          </div> 
        </form>
        
      </main>
    </div>
  );
}

