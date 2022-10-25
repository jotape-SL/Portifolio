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
  background-color: ${begeBG};
  display: flex;
  gap: 1rem;
  align-items: center;
  min-height: 50vh;
  padding: 15rem 20% 5rem 20%;
`;
