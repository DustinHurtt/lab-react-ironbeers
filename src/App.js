// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div >

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/beers' element={<Beers/>}></Route>
        <Route path='/random-beer' element={<RandomBeer/>}></Route>
        <Route path='/new-beer' element={<NewBeer/>}></Route>
        <Route path='/:id' element={<BeerDetail/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
