import React from "react";
import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";
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
  background-color: transparent;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 5rem;
  align-items: center;
  min-height: 50vh;
  padding: 8rem 20% 5rem 20%;
`;
