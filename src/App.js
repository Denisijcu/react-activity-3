import React, { Component } from 'react';
import { Link, Router } from "@reach/router"
import './App.css';

import Cars from './components/Cars/Cars';
import Cadillac from './components/Cadillac/Cadillac';
import Mustang from './components/Mustang/Mustang';
import Camarus from './components/Camarus/Camarus';
import Details from './components/Details/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> American Cars</h1>

        <Router>
        <Cars path="/" />
        <Cadillac path="/cadillac" />
        <Mustang path="/mustang" />
        <Camarus path="/camarus" />
        <Details path="/details" />
      </Router>
       
         </header> 
      </div>
    );
  }
}

export default App;
