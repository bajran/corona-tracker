import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import {CovidProvider} from './covid-provider'
import CountryGraph from "./components/countryGraph";
import Precaution from "./components/precaution";
import About from "./components/about";

function App() { 
  return (    
  <CovidProvider>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/graph/:country'>
          <CountryGraph/>
        </Route>
        <Route path='/precaution'>
          <Precaution/>
        </Route>
        <Route path = '/about'>
          <About/>
        </Route>
      </Switch>
    </Router>
  </CovidProvider>
     
  );
}

export default App;
