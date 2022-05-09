import React,  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
// import { useState } from "react/cjs/react.production.min";


const BeerDetail = ({ match }) => {
    const [beer, setBeer] = useState([]);
    const params = useParams()

  useEffect(() => {
      fetchBeer();
  }, []);

  const fetchBeer = () => {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${params.id}`

        )
        .then((res) => {
          setBeer(res.data);
          console.log(res.data)

        })
        .catch((err) => console.log(err));
    };

    return (

        <div>

            <h1>Beer Details</h1>

            <img className="beerPic" src={beer.image_url} alt = 'beer'/>
            <h4>{beer.name}</h4>
            <h5>{beer.tagline}</h5>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>

        </div>

    )
}

export default BeerDetail