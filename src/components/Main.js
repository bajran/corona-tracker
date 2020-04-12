import React, {useState, useEffect} from "react";
import Countries from "./countries";
import TopAffectedCountires from "./topAffectedCountries";
import getApiCall from '../api/api_trigger';
import { ALL_COUNTRIES, WROST_COUNTRIES, GLOBALLY_AFFECTED, SIDEBAR } from "../hooks-reducer/actionTypes";
import Country from '../json/countryData';
import GlobalData from '../json/globalData';
import {useDispatchContext, useStateContext} from '../covid-provider'

const Main = () => {
    const dispatch = useDispatchContext();
    const {showSidebar} = useStateContext();

    // const [countries, setCountries] = useState([])
    useEffect(() => {
        getApiCall("summary")
         .then(populationData => {
            console.log(populationData);
            const { Global = {}, Countries = [], Date } = populationData;
            let countries = Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed )
                let global = Global       
            dispatch({type: ALL_COUNTRIES, payload: countries});
               dispatch({type: GLOBALLY_AFFECTED, payload: global})
            dispatch({type: WROST_COUNTRIES, payload: countries.slice(0, 20)}) 
          })
          .catch(() =>
            console.log("Something is not working, Please retry after some time")
          );
        
        // // Fake Data - TO Reduce API Call
        // let {Countries} = Country;
        // let {Global} = GlobalData;
        // let global = Global
        // let countries = Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed )  
        // // setCountries(countries) 
        // dispatch({type: ALL_COUNTRIES, payload: countries});
        // dispatch({type: WROST_COUNTRIES, payload: countries.slice(0, 20)});
        // dispatch({type: GLOBALLY_AFFECTED, payload: global}); 

      },[dispatch]);

      const setSidebar = () =>{
        console.log('Main', showSidebar)
        dispatch({type: SIDEBAR, payload: !showSidebar});
      }

  return (
    <>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <button className="navbar-toggler" type="button" onClick={setSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <h6 className="navbar-header-text col-sm-12 col-md-12 mr-0">
          Covid-19 Tracker
        </h6>

      </nav>
      <div className="container-fluid">
        <div className="row">
          <Countries/>
          <TopAffectedCountires/>
        </div>
      </div>
    </>
  );
};

export default Main