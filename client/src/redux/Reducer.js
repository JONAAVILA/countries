import { ALL_COUNTRIES, FILTER } from "./ActionsTypes";

const initialState = {
    countries:[],
    countriesFiltered:[]
};

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ALL_COUNTRIES:     
            return {
                ...state,
                countries: action.payload
            }
        case FILTER:
            const filtered = state.countries.filter(c => c.continents === action.payload)
            return {
                ...state,
                countries: filtered
            }
        default:
            return state;   
    }
}

export default rootReducer;