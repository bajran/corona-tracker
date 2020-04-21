import React, {useState, useEffect} from "react";
import Countries from "./countries";
import TopAffectedCountires from "./topAffectedCountries";
import getApiCall from '../api/api_trigger';
import { ALL_COUNTRIES, WROST_COUNTRIES, GLOBALLY_AFFECTED, SIDEBAR } from "../hooks-reducer/actionTypes";
import Country from '../json/countryData';
import GlobalData from '../json/globalData';
import {useDispatchContext, useStateContext} from '../covid-provider'
import NavigationMenu from "./navigation";

const Main = () => {
    const dispatch = useDispatchContext();
    const {highlyAffectedCountries = []} = useStateContext();

    useEffect(() => {
        dispatch({ type: SIDEBAR, payload: false });
        getApiCall("summary")
         .then(populationData => {
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
        

        // Fake Data - TO Reduce API Call
        // let {Countries} = Country;
        // let {Global} = GlobalData;
        // let global = Global
        // let countries = Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed )  
        // // setCountries(countries) 
        // dispatch({type: ALL_COUNTRIES, payload: countries});
        // dispatch({type: WROST_COUNTRIES, payload: countries.slice(0, 20)});
        // dispatch({type: GLOBALLY_AFFECTED, payload: global}); 

      },[dispatch]);

  return (
    <div>
      <NavigationMenu/>
      <div className="container-fluid">
        <div className="row">
        {highlyAffectedCountries.length !== 0 ?
          <>
            <Countries/>
            <TopAffectedCountires/>
          </> :  <div className="loader">Loading...</div>
        }
        </div>
      </div>
    </div>
    
  );
};

export default Main