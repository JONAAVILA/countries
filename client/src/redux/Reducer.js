import { ALL_COUNTRIES } from "./ActionsTypes";

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
        default:
            return state;
    }
}

export default rootReducer;