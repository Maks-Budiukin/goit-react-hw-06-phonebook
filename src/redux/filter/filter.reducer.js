import { filterInitState } from "./filter.init-state";
import { FILTER } from "./filter.types";

export const filterReducer = (state = filterInitState, action) => { 
    switch (action.type) {
        case FILTER: return action.payload;
        default: return state;
        }
};