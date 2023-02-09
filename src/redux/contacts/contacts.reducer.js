import { contactsInitState } from "./contacts.init-state";
import { ADDCONTACT, DELETECONTACT, GETCONTACT } from "./contacts.types";

export const contactsReducer = (state = contactsInitState, action) => {

    switch (action.type) {
        case GETCONTACT: return [...action.payload];
        case ADDCONTACT: return [...state, action.payload];
        case DELETECONTACT: return state.filter(contact => contact.id !== action.payload);
        default: return state;
    }
    
};