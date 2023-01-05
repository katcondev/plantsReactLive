const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AT_KEY }).base(process.env.NEXT_PUBLIC_BASE_ID);

export default function Pllants() {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base(process.env.NEXT_PUBLIC_TABLE)
      .select({
        fields: ["name", "email", "message", "Location"],
        sort: [{ field: "email", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const id = record.getId();
            const pname = record.get("name");
            const email = record.get("email");
            const message = record.get("message");
            const location = record.get("Location")

            if (!pname || !email || !message || !location) return;

            totalRecords.push({
              id,
              pname,
              email,
              message,
              location
            });
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
}