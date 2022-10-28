import { useState } from "react";
import styled from "styled-components";
import { ResumoM, ResumoP, ResumoI } from "./ResumoTextos";

export default function Resumo() {
  const [Mresumo, setMresumo] = useState(false);
  const [Presumo, setPresumo] = useState(true);
  const [Iresumo, setIresumo] = useState(false);
  return (
    <TextosDiv>
      <TituloDiv>
        <h2>Sobre mim</h2>
        <BotaoResumo
          onClick={() =>
            setMresumo(true) & setPresumo(false) & setIresumo(false)
          }
        >
          MUITO resumido
        </BotaoResumo>
        <BotaoResumo
          onClick={() =>
            setPresumo(true) & setMresumo(false) & setIresumo(false)
          }
        >
          Padrão
        </BotaoResumo>
        <BotaoResumo
          onClick={() =>
            setIresumo(true) & setPresumo(false) & setMresumo(false)
          }
        >
          Já somos intimos
        </BotaoResumo>
      </TituloDiv>
      {(Mresumo && <ResumoM />) ||
        (Presumo && <ResumoP />) ||
        (Iresumo && <ResumoI />)}
    </TextosDiv>
  );
}

const TextosDiv = styled.div`
  min-width: 651px;
`;

const TituloDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const BotaoResumo = styled.button`
  padding: 6px;
  margin: 0 5px;
  font-weight: bold;
  font-family: sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgb(251, 255, 199);
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-in-out;
    color: black;
    background-color: rgb(198, 201, 156);
  }
  &:nth-child(2) {
    margin-left: 1.5rem;
  }
`;
