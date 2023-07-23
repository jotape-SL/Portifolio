import React from "react";
import styled from "styled-components";
import { cinzaBGBG, verdeBG } from "../../styles/UI/variaveis";
import Resumo from "./Resumo";
import FotoMinha from "./FotoMinha";

export default function About() {
  return (
    <AboutSection>
      <ContentDiv>
        <FotoMinha />
        <Resumo />
      </ContentDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 10rem;
  font-family: "Azeret Mono", monospace;
  background-color: ${verdeBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 1.875rem;
    margin: 30px 0;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 15.4vh;
    left: 0;
    bottom: -8rem;
    content: "";
    background: ${verdeBG};
    transform: skewY(356deg);
    display: block;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  color: white;
  padding: 0 32px;
  @media (max-width: 1216px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    align-content: center;
  }
`;
