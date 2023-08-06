import React from "react";
import styled from "styled-components";
import { begeBG, cinzaBG } from "../../styles/UI/variaveis";
import Contatos from "./Contatos";
import TextoContato from "./TextoContato";

export default function ContactMe() {
  return (
    <ContactSection id="contato">
      <TextoContato />
      <Contatos />
    </ContactSection>
  );
}

const ContactSection = styled.section`
  color: white;
  background-color: ${cinzaBG} !important;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 5rem;
  align-items: center;
  min-height: 50vh;
  padding: 8rem 2rem 5rem 2rem;
  &::before {
    content: "";
    width: 80vw;
    height: 10px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
`;
