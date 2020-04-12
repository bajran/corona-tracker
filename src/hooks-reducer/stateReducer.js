import {ALL_COUNTRIES, WROST_COUNTRIES, GLOBALLY_AFFECTED} from './actionTypes'

export const initialState = {
    global: {},
    countries: [],
    highlyAffectedCountries: []
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

        default:
            return state
    }
}