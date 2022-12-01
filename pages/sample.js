import React, { Component } from 'react';
const token = "key6J57nNGBVi4TJQ";
// const plantsContainer = document.getElementById("plants");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plantsdata: [],
    };
  }

  componentDidMount() {
    fetch("https://api.airtable.com/v0/appFj2Envr91ItMKQ/plantsDB",  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ plants: data.records });
    }).catch(err => {
      // Error
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {this.state.plants.map(plants => <PlantCard {...plants.fields} /> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const PlantCard = ({ name, personality, care, image }) => (
  <div className="card">
    <img className="card-img-top" src={image[0].url} alt="Movie poster" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{personality}</p>
      <p className="card-text">
        <small className="text-muted">{care}</small>
      </p>
    </div>
  </div>
);