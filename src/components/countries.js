import React, {useState, useEffect} from 'react';
import {useStateContext, useDispatchContext} from '../covid-provider'

const Countries = () =>{ 
    let {countries, showSidebar} = useStateContext();
    
    const [allCountry, setAllCountry] = useState([])
    const [searchText, setSearchText] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    console.log(showSidebar)

    useEffect(() => {
        setAllCountry(countries);
      }, [countries]);


    const search = () => {
        if(searchText){
            setShowSearch(false);             
            setAllCountry(countries.filter(country => country.Country.toLowerCase() === searchText.toLowerCase()));
        }       
    }

    const clear = () => {    
        setAllCountry(countries)   
        setShowSearch(true);
        setSearchText('');
    }

    const LoadComponent = () => {
        return (      
            <nav className={`bg-light sidebar ${window.screen.width > 768 ? 'col-md-3' : 'full-width-sidebar'}`}>
                <div className="input-group input-search-box">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Search By Country Name"
                        value= {searchText}
                        onChange={(e) => setSearchText(e.target.value)} 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"/>
                    <div className="input-group-prepend">
                        {
                            showSearch ? <span className="input-group-text cp" onClick={search} id="basic-addon1">Search</span>
                            : <span className="input-group-text cp" id="basic-addon1" onClick={clear}>Clear</span>
                        }
                    </div>
                </div>
                <div className="sidebar-sticky">            
                        {
                            allCountry.map((country, idx)=>{
                                return(
                                    <div className="country" key={idx}>                                   
                                        <div className="country-name">         
                                            {country.Country} 
                                        </div>
                                        <div className="total-confirmed">         
                                            Confirmed Case - {country.TotalConfirmed} 
                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                </div>
          </nav>)
    }

    return(
        <>
        { showSidebar ?  <LoadComponent/> : ( window.screen.width > 768 ? <LoadComponent/> : null)}
    </>
    )
}

export default Countries