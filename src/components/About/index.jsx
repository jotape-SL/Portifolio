import React from "react";
import styled from "styled-components";
import { cinzaBGBG, verdeBG } from "../../styles/UI/variaveis";
import FerramentasContent from "./FerramentasContent";
import Resumo from "./Resumo";
import FotoMinha from "./FotoMinha";

export default function About() {
  return (
    <AboutSection>
      <ContentDiv>
        <FotoMinha />
        <Resumo />
      </ContentDiv>
      <FerramentasContent />
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 15rem;
  font-family: "Sono", monospace;
  background-color: ${verdeBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 1.875rem;
    margin: 30px 0;
  }
  &::before {
    position: absolute;
    width: 100%;
    height: 17.4vh;
    left: 0;
    top: -6rem;
    content: "";
    background: ${verdeBG};
    transform: skewY(356deg);
    display: block;
  }
  /* @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0;
  } */
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  color: black;
  padding: 0 32px;
  @media (max-width: 1216px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    align-content: center;
  }
`;
