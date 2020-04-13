import {ALL_COUNTRIES, WROST_COUNTRIES, GLOBALLY_AFFECTED, SIDEBAR, TEXT_CHANGE} from './actionTypes'

export const initialState = {
    global: {},
    countries: [],
    highlyAffectedCountries: [],
    showSidebar: false,
    textInput: ''
};

export const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case ALL_COUNTRIES: 
           return {...state, countries: payload}
        
        case WROST_COUNTRIES:
            return {...state, highlyAffectedCountries: payload}
        
        case GLOBALLY_AFFECTED:
            return {...state, global: payload}
        
        case SIDEBAR:
            return {...state, showSidebar: payload}

        case TEXT_CHANGE:
            return {...state, inputTextData: payload} 

        default:
            return state
    }
}