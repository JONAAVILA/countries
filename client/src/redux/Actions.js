import { ALL_COUNTRIES, FILTER } from "./ActionsTypes"
import axios from 'axios';

export const allCountries = ()=>{
    const URL = 'http://localhost:3001/countries';
    
    return async (dispatch)=>{
        const response = await axios(URL);
        return dispatch({
            type: ALL_COUNTRIES,
            payload: response.data
        })
    }
}

export const filterCountries = (continents) => {
    return({
        type:FILTER,
        payload:continents
    })
}   