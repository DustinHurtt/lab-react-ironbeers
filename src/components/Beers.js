import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Beers = () => {

  const [beers, setBeers] = React.useState([])
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    getBeers()
      }, []);

  React.useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((results) => setBeers(results.data))
    .catch((err) => console.log(err.message))
      }, [query]);

  let getBeers = () => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((results) => setBeers(results.data))
        .catch((err) => console.log(err.message));
            }  
            
  let handleChange = (e) => {
    setQuery(e.target.value)
    console.log(query)
  }

  return (
    <div>

      <header >

        <nav>

          <Link to='/'>Home</Link>

        </nav>

      </header>


      <div>

        <h1>Beers</h1>

        <form>

            <label>Search</label>
            <input
              onChange={handleChange}
              type="text"
              name="search"
              value={query}
            ></input>

        </form>


        
    {beers.map(function (beer) {
        return ( 

          <div key={beer._id}>

            <img className='beerPic' src={beer.image_url} alt='beer'/>

            <Link to={`/${beer._id}`}><h3>{beer.name}</h3></Link>

            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>

            <hr/>

          </div>



          ) ;
      })}



      
      </div>

        
    </div>
  )
}

export default Beers