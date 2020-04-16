import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import {CovidProvider} from './covid-provider'
import CountryGraph from "./components/countryGraph";

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
      </Switch>
    </Router>
  </CovidProvider>
     
  );
}

export default App;
