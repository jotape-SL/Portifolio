import React from "react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { VscGithubAlt, VscGithubInverted } from "react-icons/vsc";
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
  flex-flow: column;
  justify-content: space-around;
  text-align: center;
  a {
    border: 2px solid black;
    border-radius: 100%;
    overflow: hidden;
    min-width: 130px;
    min-height: 130px;
    &:hover {
      color: white;
      background-color: black;
    }
  }
  a:nth-child(2) {
    svg {
      font-size: 5rem;
    }
  }
  span svg {
    font-size: 7rem;
  }
`;
