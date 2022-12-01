const token = "key6J57nNGBVi4TJQ";

getApi();

function getApi() {
  const requestUrl = "https://api.airtable.com/v0/appFj2Envr91ItMKQ/plants";

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
