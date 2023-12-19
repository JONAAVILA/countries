import { ALL_COUNTRIES, FILTER, ORDER, SEARCH } from "./ActionsTypes";

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
            const filtered = state.countries.filter(c =>{
                if(action.payload === 'all'){
                    return c
                }else if(action.payload === c.continents){
                    return c
                }
            })
            return {
                ...state,
                countriesFiltered: filtered
            }
        case ORDER:
            const filterOrder = [...state.countriesFiltered]
            if (action.payload === "A") {
                 filterOrder.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                filterOrder.sort((a, b) => b.name.localeCompare(a.name))
            }
            return {
                ...state,
                countriesFiltered: filterOrder
            };
        case SEARCH:
            const foundCountry = state.countries.find(c => c.name === action.payload)
            return{
                ...state,
                countriesFiltered: foundCountry
            }
        default:
            return state;   
    }
}

export default rootReducer;