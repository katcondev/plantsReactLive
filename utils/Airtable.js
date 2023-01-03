const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AT_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_BASE_ID);

// Reference a table
const table = base(process.env.NEXT_PUBLIC_TABLES);

// To get minified records array
const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));

// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };