import React from "react";

import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

export default function Contatos() {
  return (
    <IconDiv>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://github.com/jotape-SL"
      >
        <span>
          <VscGithubInverted />
          <p className="sr-only">Github</p>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.linkedin.com/in/jo%C3%A3o-pedro-sl-programador/"
      >
        <span>
          <FaLinkedinIn />
          <p className="sr-only">Linkedin</p>
        </span>
      </a>
    </IconDiv>
  );
}

const IconDiv = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  a {
    border: 4px solid black;
    border-radius: 50%;
    overflow: hidden;
    width: 132px;
    height: 131px;
    &:hover {
      color: white;
      background-color: black;
    }
  }
  a:nth-child(2) {
    svg {
      margin-top: 10%;
      font-size: 6rem;
    }
  }
  a svg {
    margin-top: 5%;
    font-size: 7rem;
  }
`;
