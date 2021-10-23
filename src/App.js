import './App.css';
import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import {Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      
      <Switch> 
        <Route path='/work' exact>
          <Work/>
        </Route>
        <Route path='/'>
          <Navbar/>
          <Home/>
          <About/>
          <Contact/>
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
