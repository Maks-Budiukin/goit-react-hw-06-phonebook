import { createSlice } from "@reduxjs/toolkit"
import { contactsInitState } from "./contacts.init-state"


 



const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        contactsGetAction: (state, { payload }) => [...payload],
        contactsAddAction: (state, { payload }) => [...state, payload],
        contactsDeleteAction: (state, { payload }) => state.filter(contact => contact.id !== payload),
    }
})

export const { contactsGetAction, contactsAddAction, contactsDeleteAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

