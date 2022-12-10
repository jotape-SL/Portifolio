import React from "react";
import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";
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
      <FerramentasDiv>
        <FerramentasContent />
      </FerramentasDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 15rem;
  padding-top: 9rem;
  font-family: "Sono", monospace;
  background-color: ${begeBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  &::before {
    position: absolute;
    width: 100%;
    height: 20vh;
    left: 0;
    top: -6rem;
    content: "";
    background: ${begeBG};
    transform: skewY(356deg);
    display: block;
  }
  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  color: black;
  max-width: 50vw;
  div:nth-child(2) {
    margin: 0 4%;
  }
  @media (max-width: 1216px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-top: 8rem;
    align-content: center;
  }
`;

const FerramentasDiv = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;
