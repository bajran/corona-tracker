import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useStateContext} from '../covid-provider'

const GlobalResult = () => {
    const {global} = useStateContext();
    let result = [];
    Object.keys(global).map((data) => result.push([data, global[data]]));

    const options = {
        title: {
          text: 'Globally Affected'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:f}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
				showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Number of People',
            innerSize: '50%',
            data: result
        }]
      }
       
    return(
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default GlobalResult