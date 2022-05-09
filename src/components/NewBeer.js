import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const NewBeer = () => {
  const [newBeer, setNewBeer] = React.useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  })

  let navigate = useNavigate()

    

  function addBeer() {

    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then (navigate('/beers'))
    .catch(error => {
      console.error('There was an error!', error);
    });
}

  const handleChange = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // console.log("this");
    e.preventDefault();
    addBeer(newBeer);
    setNewBeer({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <div>
        <h1>New Beer</h1>

        <div>
          <form>
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={newBeer.name}
            ></input>
            <label>Tagline</label>
            <input
              onChange={handleChange}
              type="text"
              name="tagline"
              value={newBeer.tagline}
            ></input>
            <label>Description</label>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              value={newBeer.description}
            ></input>
            <label>First Brewed</label>
            <input
              onChange={handleChange}
              type="text"
              name="first_brewed"
              value={newBeer.first_brewed}
            ></input>
            <label>Brewers Tips</label>
            <input
              onChange={handleChange}
              type="text"
              name="brewers_tips"
              value={newBeer.brewers_tips}
            ></input>
            <label>Attenuation Level</label>
            <input
              onChange={handleChange}
              type="number"
              name="attenuation_level"
              value={newBeer.attenuation_level}
            ></input>
            <label>Contributed By</label>
            <input
              onChange={handleChange}
              type="text"
              name="contributed_by"
              value={newBeer.contributed_by}
            ></input>

            <button onClick={handleSubmit} type="button">
              Add a Beer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBeer;
