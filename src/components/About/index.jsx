import React from "react";
import styled from "styled-components";
import { cinzaClaro, begeBG } from "../../styles/UI/variaveis";
import FerramentasContent from "./FerramentasContent";
import Resumo from "./Resumo";
import profilePic from "../../../public/perfil.png";
import FotoMinha from "./FotoMinha";

export default function About() {
  return (
    <AboutSection>
      <ContentDiv>
        <FotoMinha />
        <Resumo />
      </ContentDiv>
      <FerramentasDiv>
        <FerramentasContent />
      </FerramentasDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 15rem;
  padding-top: 3rem;
  font-family: monospace;
  background-color: ${begeBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  &::before {
    position: absolute;
    height: 15%;
    width: 100%;
    left: 0;
    top: -6rem;
    content: "";
    background: ${begeBG};
    transform: skewY(356deg);
    display: block;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: black;
  font-size: 1.1rem;
  margin: 5.5rem 2rem;
  max-width: 50vw;
  div:nth-child(2) {
    margin: 0 5%;
  }
`;

const FerramentasDiv = styled.div`
  margin: 8rem 0 5rem 0;
  text-align: center;
`;
