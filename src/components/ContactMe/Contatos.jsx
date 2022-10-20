import React from "react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";

export default function Contatos() {
  return (
    <IconDiv>
      <a href="https://github.com/jotape-SL">
        <span>
          <FiGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-sl-programador/">
        <span>
          <FiLinkedin />
        </span>
      </a>
    </IconDiv>
  );
}

const IconDiv = styled.div`
  display: flex;
  flex-flow: column;
`;
