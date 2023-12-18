import { ALL_COUNTRIES, FILTER } from "./ActionsTypes";

const initialState = {
    countries:[]
};

const rootReducer = (state = initialState, actions)=>{
    switch (actions.type) {
        case ALL_COUNTRIES:     
            return {
                ...state,
                countries: actions.payload
            }
        case FILTER:
            const filtered = state.countries.filter(c => c.name === actions.payload)
            return {
                ...state,
                countries: filtered
            }
        default:
            return state;
    }
}

export default rootReducer;