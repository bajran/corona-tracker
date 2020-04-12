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