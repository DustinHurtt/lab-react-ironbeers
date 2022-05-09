import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const RandomBeer = () => {

    // const [beers, setBeers] = React.useState([])
    const [random, setRandom] = React.useState({})

    React.useEffect(() => {
      getBeers()
        }, []);
  
    let getBeers = () => {
          axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((results) => 
        //   setBeers(results.data);
          // console.log(results.data)
          setRandom(results.data[Math.floor(Math.random() * results.data.length)])
          
          )
          .catch((err) => console.log(err.message));
              }   

    // let random = beers[Math.floor(Math.random() * beers.length)]
  

  return (
    <div>

        <header >

            <nav>

                <Link to='/'>Home</Link>

            </nav>

        </header>


        <div>

            <h1>Random Beer</h1>



            <img className="beerPic" src={random.image_url} alt = 'random'/>
            <h4>{random.name}</h4>
            <h5>{random.tagline}</h5>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>{random.contributed_by}</p>

        </div>


        
    </div>
  )
}

export default RandomBeer