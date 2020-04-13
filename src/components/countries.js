import React, {useState, useEffect, useRef} from 'react';
import {useStateContext, useDispatchContext} from '../covid-provider'
import {TEXT_CHANGE} from "../hooks-reducer/actionTypes";

const Countries = () =>{ 
    let {countries, showSidebar, inputTextData} = useStateContext();   
    let dispatch = useDispatchContext(); 
    const [allCountry, setAllCountry] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    let textInput = useRef(null);
    

    useEffect(() => {
        setAllCountry(countries);
      }, [countries]);

    useEffect(()=>{
        textInput.current.value = inputTextData
    },[inputTextData])

    const search = () => {
        let inputTextData = textInput.current.value
        if(inputTextData){
            setShowSearch(false);             
            setAllCountry(countries.filter(country => country.Country.toLowerCase() === inputTextData.toLowerCase()));
            dispatch({type: 'TEXT_CHANGE', payload: inputTextData})
        }       
    }

    const clear = () => {    
        setAllCountry(countries)   
        setShowSearch(true);
        dispatch({type: TEXT_CHANGE, payload: ''})
    }

    const LoadComponent = () => {
        return (      
            <nav className={`bg-light sidebar ${window.screen.width > 768 ? 'col-md-3' : 'full-width-sidebar'}`}>
                <div className="input-group input-search-box">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Search By Country Name"
                        ref={textInput}
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        />
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