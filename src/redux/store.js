import { createStore } from "redux";

const reducer = (state = "", action) => {

    switch (action.type) {
        case 'FILTER': return { ...state, filter: "" + action.payload  };
        case 'GETCONTACT': return { ...state, contacts: [...action.payload] };
        case 'ADDCONTACT': return { ...state, contacts: [...state.contacts, action.payload] };
        case 'DELETECONTACT': return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)}
        default: return state;
    }
    
};


export const store = createStore(reducer, { filter: "", contacts: [] });


