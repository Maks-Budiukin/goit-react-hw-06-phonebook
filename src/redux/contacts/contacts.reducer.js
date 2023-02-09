// ================= NOT NEEDED WITH SLICE:

// import { createReducer } from "@reduxjs/toolkit";
// import { contactsAddAction, contactsDeleteAction, contactsGetAction } from "./contacts.actions";
// import { contactsInitState } from "./contacts.init-state";

// export const contactsReducer = createReducer(contactsInitState, builder => {
//     builder.addCase(contactsGetAction, (state, { payload }) => [...payload])
//     .addCase(contactsAddAction, (state, { payload }) => [...state, payload])
//     .addCase(contactsDeleteAction, (state, { payload }) => state.filter(contact => contact.id !== payload))
// })