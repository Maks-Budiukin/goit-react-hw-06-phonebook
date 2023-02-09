import { createStore, combineReducers } from "redux";
import { contactsInitState } from "./contacts/contacts.init-state";
import { contactsReducer } from "./contacts/contacts.reducer";
import { filterInitState } from "./filter/filter.init-state";
import { filterReducer } from "./filter/filter.reducer";


const initState = {
    filter: filterInitState,
    contacts: contactsInitState,
}

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})


export const store = createStore(rootReducer, initState);


