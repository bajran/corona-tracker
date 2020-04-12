import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Main from "./components/Main";
import {CovidProvider} from './covid-provider'

function App() { 
  return (
  <CovidProvider>
    <Main/>
  </CovidProvider>
     
  );
}

export default App;
