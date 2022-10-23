import React from "react";
import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";
import Contatos from "./Contatos";
import TextoContato from "./TextoContato";

export default function ContactMe() {
  return (
    <ContactSection>
      <TextoContato />
      <Contatos />
    </ContactSection>
  );
}

const ContactSection = styled.section`
  background-color: ${begeBG};
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 0 15%;
`;
