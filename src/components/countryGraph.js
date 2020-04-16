import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import getApiCall from '../api/api_trigger';
import CountryInfo from './countryInfo';
import * as moment from 'moment';
// import Highcharts from 'highcharts';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const CountryGraph =() => {
    const {country} = useParams();
    const [confirmedCases, setConfirmedCases] = useState([]);
    const [recoveredCases, setRecoveredCases] = useState([]);
    const [deathCases, setDeathCases] = useState([]);
    const [dates, setDates] = useState([]);
    const [totalData, setTotalData] = useState([]) 

    useEffect(()=>{
        getApiCall(`total/dayone/country/${country}`)
         .then(cases => {
            let allDate = [],
                confirmedData = [],
                recoveredData = [],
                deathData = [];
                cases.map((confCase)=>{
                    allDate.push(moment(confCase.Date).format('ll'));
                    confirmedData.push(confCase.Confirmed);
                    recoveredData.push(confCase.Recovered);
                    deathData.push(confCase.Deaths)
                })
            setConfirmedCases(confirmedData);
            setRecoveredCases(recoveredData);
            setDeathCases(deathData);
            setDates(allDate);
            setTotalData(cases[cases.length-1]);
          })
          .catch(() =>
            console.log("Something is not working,Graph Data")
          );

        
    },[country]);

    const options = {
        title: {
            text: 'Affected Data'
          },
          xAxis: {
            categories: dates,
            min: 0,
            max: 50,
            scrollbar: {
                enabled: true,
                barBackgroundColor: 'gray',
                barBorderRadius: 7,
                barBorderWidth: 0,
                buttonBackgroundColor: 'gray',
                buttonBorderWidth: 0,
                buttonBorderRadius: 7,
                trackBackgroundColor: 'none',
                trackBorderWidth: 1,
                trackBorderRadius: 8,
                trackBorderColor: '#CCC'
            },
            tickLength: 0
        },    
        yAxis: {
            title: {
                text: 'Number of People'
            },
            type: 'logarithmic',
            max: 1000000,
            lineColor: '#F33'
        },   
        plotOptions: {
            series: {
                showInNavigator: true
            }
        },
        rangeSelector: {
            selected: 4
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
    console.log(dates)
    return (
        <div>
            <CountryInfo totalData = {totalData}/>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default CountryGraph
