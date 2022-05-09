import React from 'react'
import BeersImage from '../assets/beers.png'
import RandomBeersImage from '../assets/random-beer.png'
import NewBeerImage from '../assets/new-beer.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <br/>

        <img src={BeersImage} alt='beers'/>
        <Link to='/beers'><h2>Beers</h2></Link>
        <br/>

        <img src={RandomBeersImage} alt='random beer'/>
        <Link to='/random-beer'><h2>Random Beer</h2></Link>
        <br/>

        <img src={NewBeerImage} alt='new beer'/>
        <Link to='/new-beer'><h2>New Beer</h2></Link>
        <br/>

        
    </div>
  )
}

export default Home