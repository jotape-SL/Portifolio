import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaRegLightbulb } from "react-icons/fa";
import { useGlobalContext } from "../Context";

export default function ModalConfidencial() {
  const { setPessResumo, setProfResumo, setConfidencialTxt } =
    useGlobalContext();
  const [senhaErrada, setSenhaErrada] = useState(false);
  const senhaRef = useRef(null);
  const { isAutenticado, setIsAutenticado, setConfidencialModal } =
    useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const senha = senhaRef.current.value;
    if (senha === "1234") {
      setPessResumo(false);
      setProfResumo(false);
      setConfidencialTxt(true);
      setIsAutenticado(true);
      setConfidencialModal(false);
    } else {
      setSenhaErrada(true);
    }
  };
  return (
    <>
      <MainDiv
        onClick={() => {
          setConfidencialModal(false);
        }}
      ></MainDiv>
      <ConfidentialDiv>
        <TxtDiv>
          <IconConf onClick={() => alert("Talvez me fazer um cafuné ajude")}>
            <FaRegLightbulb />
          </IconConf>
          <p>
            Informação confidencial, digite a senha super confidendial para
            acessá-la.
          </p>
        </TxtDiv>
        <InputForm
          onSubmit={handleSubmit}
          className={senhaErrada ? "wrong-senha" : ""}
        >
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
  --s: 500px;
  --c: #1803091d;

  --_g: #0000 52%, var(--c) 54% 57%, #0000 59%;
  background: radial-gradient(farthest-side at -33.33% 50%, var(--_g)) 0
      calc(var(--s) / 2),
    radial-gradient(farthest-side at 50% 133.33%, var(--_g)) calc(var(--s) / 2)
      0,
    radial-gradient(farthest-side at 133.33% 50%, var(--_g)),
    radial-gradient(farthest-side at 50% -33.33%, var(--_g)), #000000;
  background-size: calc(var(--s) / 4.667) var(--s),
    var(--s) calc(var(--s) / 4.667);
  z-index: 902;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #75757573;
  margin-left: 1rem;
`;
const ConfidentialDiv = styled.div`
  z-index: 903;
  width: 75%;
  position: fixed;
  flex-direction: column;
  background-color: #27272a;
  border: 2px solid #757575;
  border-radius: 5px;
  padding: 32px;
  color: white;
  top: 50%;
  animation: pulse 2s linear infinite;
  svg {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
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

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .wrong-senha input {
    &:focus {
      outline: 10px;
      outline: none !important;
      box-shadow: 0 0 10px 2px red;
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
  cursor: pointer;
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
