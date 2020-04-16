import React from 'react';


const CountryInfo = ({totalData}) =>{ 
    
    let {Country, Confirmed = 0, Deaths = 0, Recovered = 0} = totalData
   

    return(
        <div>
        <h6 className="single-country-name">{Country}</h6>
        <div className="d-flex justify-content-center row highly-affected">
            { Confirmed !==0 &&
            <div className="col-sm-2 highly-affected-data cp" >
                <div className="card mb-2 single-country-confirmed">
                    <div>
                        <h5 className="card-title text-center m-2 country-info">Confirmed</h5>
                        <div className="card-text text-center ">
                            <h5 className="cases">{Confirmed}</h5>                                    
                        </div>                        
                    </div>
                </div>
            </div>
            }
            { Recovered !== 0 &&
            <div className="col-sm-2 highly-affected-data cp" >
                <div className="card  mb-2 single-country-recovered">
                    <div>
                        <h5 className="card-title text-center m-2 country-info">Recovered</h5>
                        <div className="card-text text-center ">
                            <h5 className="cases">{Recovered}</h5>                                    
                        </div>                     
                    </div>
                </div>
            </div>
            }
            {Deaths !== 0 &&
            <div className="col-sm-2 highly-affected-data cp" >
                <div className="card single-country-death mb-2">
                    <div>
                        <h5 className="card-title text-center m-2 country-info">Deaths</h5>
                        <div className="card-text text-center ">
                            <h5 className="cases">{Deaths}</h5>                                    
                        </div>                        
                    </div>
                </div>
            </div>
            }
            {Recovered !==0 &&
            <div className="col-sm-2 highly-affected-data cp" >
                <div className="card  mb-2 single-country-recovered">
                    <div>
                        <h5 className="card-title text-center m-2 country-info">Recovered Ratio</h5>
                        <div className="card-text text-center ">
                            <h5 className="cases">{((Recovered * 100)/ Confirmed).toFixed(2)}</h5>                                    
                        </div>                        
                    </div>
                </div>
            </div>
            }  
            { Deaths !== 0 &&  
            <div className="col-sm-2 highly-affected-data cp" >
                <div className="card  mb-2 single-country-death">
                    <div>
                        <h5 className="card-title text-center m-2 country-info">Death Ratio</h5>
                        <div className="card-text text-center ">
                            <h5 className="cases">{((Deaths * 100)/ Confirmed).toFixed(2)}</h5>                                    
                        </div>                        
                    </div>
                </div>
            </div>
            }
        </div>
        </div>
    )
    
}

export default CountryInfo