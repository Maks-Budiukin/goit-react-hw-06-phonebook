import { ADDCONTACT, DELETECONTACT, GETCONTACT } from "./contacts.types";

export const contactsGetAction = payload => ({ type: GETCONTACT, payload })

export const contactsAddAction = payload => ({ type: ADDCONTACT, payload })

export const contactsDeleteAction = payload => ({type: DELETECONTACT, payload})