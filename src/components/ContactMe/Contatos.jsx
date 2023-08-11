import React from "react";
import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { cinzaCont, roxinhoIcones } from "../../styles/UI/variaveis";

export default function Contatos() {
  return (
    <IconDiv>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://github.com/jotape-SL"
      >
        <span>
          <AiOutlineGithub />
          <p className="sr-only">Github</p>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.linkedin.com/in/jo%C3%A3o-pedro-sl-programador/"
      >
        <span>
          <AiOutlineLinkedin />
          <p className="sr-only">Linkedin</p>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.instagram.com/jotape_sl/"
      >
        <span>
          <AiOutlineInstagram />
          <p className="sr-only">Instagram</p>
        </span>
      </a>
      <EmailA href="#email">
        <span>
          <AiOutlineMail />
          <p className="sr-only">Gmail</p>
          <p>jotapesl.dev@gmail.com</p>
        </span>
      </EmailA>
    </IconDiv>
  );
}

const IconDiv = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${cinzaCont};
  gap: 1rem;
  border-radius: 60px;
  padding: 5px 30px;
  a svg {
    margin-top: 5%;
    font-size: 5rem;
    &:hover {
      color: ${roxinhoIcones};
    }
  }
`;

const EmailA = styled.a`
  span {
    position: relative;
  }
  p {
    visibility: hidden;
    width: 240px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -120px;
  }
  &:hover p {
    visibility: visible;
  }
`;
