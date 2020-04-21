import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import getApiCall from '../api/api_trigger';
import CountryInfo from './countryInfo';
import * as moment from 'moment';
import DarkUnica from 'highcharts/themes/dark-unica';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import NavigationMenu from './navigation';
import { useDispatchContext } from "../covid-provider";
import { SIDEBAR } from "../hooks-reducer/actionTypes";
import Countries from './countries';


const CountryGraph =() => {
    const {country} = useParams();
    const [confirmedCases, setConfirmedCases] = useState([]);
    const [recoveredCases, setRecoveredCases] = useState([]);
    const [deathCases, setDeathCases] = useState([]);
    const [dates, setDates] = useState([]);
    const [totalData, setTotalData] = useState([])
    const dispatch = useDispatchContext();

    useEffect(()=>{
        dispatch({ type: SIDEBAR, payload: false });
        getApiCall(`total/dayone/country/${country}`)
         .then(cases => {
            let allDate = [],
                confirmedData = [],
                recoveredData = [],
                deathData = [];
            let totalRecord = cases.length - 35;
                cases.map((confCase) => {
                    allDate.push(moment(confCase.Date).format('ll'));
                    confirmedData.push(confCase.Confirmed);
                    recoveredData.push(confCase.Recovered);
                    deathData.push(confCase.Deaths)
                });
            setConfirmedCases(confirmedData.splice(totalRecord, confirmedData.length));
            setRecoveredCases(recoveredData.splice(totalRecord, recoveredData.length));
            setDeathCases(deathData.splice(totalRecord, deathData.length));
            setDates(allDate.splice(totalRecord, allDate.length));
            setTotalData(cases[cases.length-1]);
          })
          .catch(() =>
            console.log("Something is not working,Graph Data")
          );

        
    },[country, dispatch]);

    const options = {
        title: {
            text: 'Last 25 Days Record'
          },
          xAxis: {
            categories: dates
        },    
        yAxis: {
            title: {
                text: 'Number of People'
            },
            type: 'logarithmic',
            max: 1000000,
            lineColor: '#F33'
        },   
       
        series: [
            {
                name: 'Confirmed',
                data: confirmedCases,
                color: '#ffc107',
                
            },
            {
                name: 'Recovered',
                data: recoveredCases,
                color: '#28a745'
            },
            {
                name: 'Deaths',
                data: deathCases,
                color: '#F33'
            }
        ]
    }
    return (
        <div>
            <NavigationMenu showSearchIcon = { false }/>
            <div className="about-precaution">
                <Countries/>
           </div>
            {
                totalData.length !== 0 ? 
                    (
                        <div className="full-country-info">
                            <CountryInfo totalData = {totalData}/>
                            <div className="highcharts-data">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                    theme = {DarkUnica}
                                />
                            </div>
                        </div>
                    ):  (<div class="loader">Loading...</div>) 
            }
          
        </div>
    )
}

export default CountryGraph
