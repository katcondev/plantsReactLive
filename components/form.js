import { useState } from "react";
import axios from "axios";

export default function ConPlan() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [Location, setLocation] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    axios
      .post(
        // replace this with your own unique endpoint URL
        "https://api.airtable.com/v0/apphid3mzUCCadQb6/test",
        {
          name: name,
          message: message,
          email: email,
          Location: Location
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AT_KEY}`,
          }
        }
      )
      .then((res) => {
        // success http code
        if (res.data.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.data.message);
        }
      });
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We&apos;ve received your message, thank you for contacting us!</p>;
  }

  return (
    <form onSubmit={submit}>
    <input
        name="fldIRQFelfCmtmxcc" // name should matched with your airtable table field
        type="text"
        placeholder="Name"
        className="block w-full mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
    <label htmlFor="email">Email</label>    
    <input
        name="fld7qLfJkfzA3iUwA" // name should matched with your airtable table field
        type="email"
        placeholder="Email"
        className="block w-full mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="message">Message</label>
    <textarea
        name="fldBP6ezNPz9oYZ6p" // name should matched with your airtable table field
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
    />
        
    <select
        name="fld64XOaCSZbiRXTJ"
        type='Single select'
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="United States"
        onChange={(e) => setLocation(e.target.value)}
        >
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="MX">Mexico</option>
    </select>
      <button type="submit">Send</button>
    </form>
  );
}