import {CLEAR_CONTACT, CREATE_CONTACT,DELETE_CONTACT,DELETE_SELECTED_CONTACTS,GET_CONTACT,SELECT_CONTACT,UPDATE_CONTACT} from '../constants/types';

//Add new contact
export const addContact = (contact) => ({
    type:CREATE_CONTACT,
    payload: contact,
})

//Get contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
})

//Update Contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})

//Delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})

//select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})

//clear selected contacts
export const clearAllContacts = () => ({
    type: CLEAR_CONTACT,
})

//delete selected contacts
export const deleteAllContacts = () => ({
    type: DELETE_SELECTED_CONTACTS,
})
