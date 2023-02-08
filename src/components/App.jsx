import React from "react";
import { useEffect, useRef } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";


const Wrapper = styled.div`
  width: 300px;
  margin-left: 50px;
  h1 {
    font-size: 2.1em;
    text-align: right;
  }
  h2 {
    font-size: 2.1em;
  }
  span {
    color: skyblue;
  }
`

export const App = () => {
  const isFirstRender = useRef(true)

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    const people = JSON.parse(localStorage.getItem("contacts")) ;
    if (isFirstRender.current && people) {
      dispatch({type: 'GETCONTACT', payload: people })
      isFirstRender.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  return (
      <Wrapper>
      <h1><span>P</span>honebook</h1>
      <ContactForm />
      <h2>Contact<span>s</span></h2>
      <Filter />
      <ContactList />
      </Wrapper>
    
   )
}