import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { ResumoPess, ResumoProf } from "./ResumoTextos";

export default function Resumo() {
  const { isPtbr } = useGlobalContext();
  const [PessResumo, setPessResumo] = useState(false);
  const [Presumo, setPresumo] = useState(false);
  const [ProfResumo, setProfResumo] = useState(true);
  return (
    <TextosDiv>
      <TituloDiv>
        <h2>{isPtbr ? "Sobre mim" : "About me"}</h2>
        <div>
          <BotaoResumo
            onClick={() =>
              setPessResumo(true) & setPresumo(false) & setProfResumo(false)
            }
          >
            {isPtbr ? "Pessoal" : "Personal"}
          </BotaoResumo>
          <BotaoResumo
            onClick={() =>
              setPresumo(true) & setPessResumo(false) & setProfResumo(false)
            }
          >
            {isPtbr ? "Confidencial" : "Confidential"}
          </BotaoResumo>
          <BotaoResumo
            onClick={() =>
              setProfResumo(true) & setPresumo(false) & setPessResumo(false)
            }
          >
            {isPtbr ? "Profissional" : "Professional"}
          </BotaoResumo>
        </div>
      </TituloDiv>
      {(PessResumo && <ResumoPess />) ||
        // (Presumo && <ResumoP />) ||
        (ProfResumo && <ResumoProf />)}
    </TextosDiv>
  );
}

const TextosDiv = styled.div`
  min-width: 651px;
  @media (max-width: 655px) {
    min-width: 400px;
    div {
      display: block;
    }
  }
  @media (max-width: 399px) {
    min-width: 310px;
  }
`;

const TituloDiv = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 320px) {
    flex-direction: column;
    margin: 40px 0;
  }
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
  @media (max-width: 399px) {
    padding: 2px;
    margin: 0.5px;
  }
  &:hover {
    transition: 0.1s ease-in-out;
    color: black;
    background-color: rgb(198, 201, 156);
  }
  &:nth-child(1) {
    margin-left: 1.5rem;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;
