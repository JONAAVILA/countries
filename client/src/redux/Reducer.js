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
        default:
            return state;   
    }
}

export default rootReducer;