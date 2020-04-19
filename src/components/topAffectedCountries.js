import React from "react";
import GlobalResult from "./globalResult";
import {useStateContext} from '../covid-provider';
import {Link} from 'react-router-dom';


const TopAffectedCountires = () => {
    const {highlyAffectedCountries = []} = useStateContext();
    
    return (
        <>
        {highlyAffectedCountries.length !== 0 ?
            (<main role="main" className={`ml-sm-auto ${ window.screen.width <= 768 ? 'col-md-12' : 'col-md-9' }`}>
                <GlobalResult/>
                <h5 className="top-country-list">Highly Affected Countries</h5>
                <div className="row highly-affected">
                {
                    highlyAffectedCountries.map((country, idx)=>{
                        return(
                            <div className="col-sm-4" key={idx}>
                                <Link to={`graph/${country.Slug}`} className="link">
                                    <div className="card card-data mb-2">
                                        <div>
                                            <h5 className="card-title text-center m-2 country-title">{country.Country}</h5>
                                            <div className="card-text text-center confirmed">
                                                <h5 className="cases">Confirmed - {country.TotalConfirmed}</h5>                                    
                                            </div>
                                            <div className="card-text text-center recover">
                                                <h5 className="cases">Recovered - {country.TotalRecovered}</h5>                                    
                                            </div>
                                            <div className="card-text text-center death">
                                                <h5 className="cases">Death - {country.TotalDeaths}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
                
                </div>
            </main>) : <div className="loader">Loading...</div>
        }
        </>
    );
};

export default TopAffectedCountires;
