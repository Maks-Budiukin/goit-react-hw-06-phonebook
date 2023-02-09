import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";



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