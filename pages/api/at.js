const token = 'process.env.AT_TOKEN';

getApi();

function getApi() {
  const requestUrl = "https://api.airtable.com/v0/process.env.BASE_ID/Plants";

  fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const plant = data.records;
      for (var i = 0; i < plant.length; i++) {
        console.log(plant[i]);
      }
    })

    .catch((error) => console.log("error", error));
}

