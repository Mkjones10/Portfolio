
import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import React from 'react';

import {  Switch, Route} from 'react-router-dom'
import Home from './Home';
import Categories from './Categories';
import RandomMeal from './RandomMeal';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path ='/'><Home/></Route>
        <Route path ='/categories'><Categories/></Route>
        <Route path ='/random'><RandomMeal/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
