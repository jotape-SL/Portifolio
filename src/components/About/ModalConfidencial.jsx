import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import { useGlobalContext } from "../Context";

export default function ModalConfidencial() {
  const senhaRef = useRef(null);
  const { isAutenticado, setIsAutenticado, setConfidencial } =
    useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(senhaRef.current.value);
    const senha = senhaRef.current.value;
    if (senha === "1234") {
      console.log("senha correta");
      setIsAutenticado(true);
      console.log(isAutenticado);
    } else {
      console.log("senha incorreta");
    }
  };
  return (
    <>
      <MainDiv onClick={() => setConfidencial(false)}></MainDiv>
      <ConfidentialDiv>
        <TxtDiv>
          <IconConf>
            <FaRegLightbulb />
          </IconConf>
          <p>
            Informação confidencial, digite a senha super confidendial para
            acessá-la.
          </p>
        </TxtDiv>
        <InputForm onSubmit={handleSubmit}>
          <label className="visually-hidden" for="senha">
            Digite sua senha
          </label>
          <input
            ref={senhaRef}
            id="senha"
            type="password"
            maxLength={4}
            inputMode="numeric"
            placeholder="▪▪▪▪"
            aria-label="Senha"
            aria-describedby="Senha"
          />
          <button type="submit" className="visually-hidden">
            submit
          </button>
        </InputForm>
      </ConfidentialDiv>
    </>
  );
}

const MainDiv = styled.div`
  z-index: 902;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #7575755c;
`;
const ConfidentialDiv = styled.div`
  position: absolute;
  z-index: 903;
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #27272a;
  border: 2px solid #757575;
  border-radius: 5px;
  padding: 32px;
  color: white;
  animation: pulse 2s linear infinite;
  svg {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
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

const TxtDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const IconConf = styled.div`
  color: #fff854;
  text-align: end;
`;
const InputForm = styled.form`
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
