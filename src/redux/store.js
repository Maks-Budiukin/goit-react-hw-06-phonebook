import { contactsInitState } from "./contacts/contacts.init-state";
import { contactsReducer } from "./contacts/contacts.slice";
import { filterInitState } from "./filter/filter.init-state";
import { filterReducer } from "./filter/filter.slice";

import { configureStore } from "@reduxjs/toolkit";


const initState = {
    filter: filterInitState,
    contacts: contactsInitState,
}

// const rootReducer = combineReducers({
//     filter: filterReducer,
//     contacts: contactsReducer,
// })


// export const store = createStore(rootReducer, initState);


export const store = configureStore({
    reducer: {
        filter: filterReducer,
        contacts: contactsReducer,
    },
    devTools: true,
    preloadedState: initState,
})