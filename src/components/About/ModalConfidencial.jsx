import React from "react";
import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";

export default function ModalConfidencial() {
  return (
    <ConfidentialDiv>
      <IconConf>
        <FaRegLightbulb />
      </IconConf>
      <p>
        Informação confidencial, digite a senha super confidendial para
        acessá-la.
      </p>
      <InputDiv>
        <label className="visually-hidden" for="senha">
          Digite sua senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="▪▪▪▪"
          aria-label="Email"
          aria-describedby="Senha"
        />
      </InputDiv>
    </ConfidentialDiv>
  );
}

const ConfidentialDiv = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  background-color: #27272a;
  border: 2px solid #757575;
  border-radius: 5px;
  padding: 32px;
  color: white;
  animation: pulse 2s linear infinite;
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  @keyframes pulse {
    0% {
      box-shadow: none;
    }
    50% {
      box-shadow: 0px 0px 20px 5px rgba(255, 56, 56, 0.43);
    }
    100% {
      box-shadow: none;
    }
  }
`;
const IconConf = styled.div`
  color: #fff854;
  text-align: end;
`;
const InputDiv = styled.div`
  input {
    border-radius: 5px;
    width: 100%;
    text-align: center;
    background-color: #52525b;
    border: none;
    height: 6.5vh;
    font-size: 6rem;
  }
`;
