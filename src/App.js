import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import {Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar/>
      <Switch> 
        <Route path='/work' exact>
          <Work/>
        </Route>
        <Route path='/'>
          <Home/>
          <About/>
          <Contact/>
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
