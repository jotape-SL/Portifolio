import React from "react";
import styled from "styled-components";
import { cinzaClaro, begeBG } from "../../styles/UI/variaveis";
import AboutIcons from "./AboutIcons";
import Resumo from "./Resumo";

export default function About() {
  return (
    <AboutSection>
      <ContentDiv>
        <div>
          <img
            src="https://placekitten.com/500/500"
            alt="uma pessoa bem bonita, mas conhecida como eu "
          />
        </div>
        <Resumo />
      </ContentDiv>
      <FerramentasDiv>
        <h2 className="sobre__titulo">Ferramentas com que trabalho</h2>
        <AboutIcons />
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
  img {
    padding: 5px;
    border: 2px solid ${cinzaClaro};
    max-width: 400px;
    border-radius: 10px;
    animation: border 3s ease-in-out;
  }
  h2 {
    font-size: 3rem;
  }
  .sobre__titulo {
    margin-bottom: 4rem;
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
  margin: 10rem 0 5rem 0;
  text-align: center;
`;
