import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { ResumoPess, ResumoProf } from "./ResumoTextos";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function Resumo() {
  const { isPtbr, confidencial, setConfidencial } = useGlobalContext();
  const [PessResumo, setPessResumo] = useState(false);
  const [ProfResumo, setProfResumo] = useState(true);
  return (
    <TextosDiv>
      <TituloDiv>
        <h2>{isPtbr ? "Sobre mim" : "About me"}</h2>
        <div>
          <BotaoResumo
            onClick={() =>
              setPessResumo(true) &
              setConfidencial(false) &
              setProfResumo(false)
            }
          >
            {isPtbr ? "Pessoal" : "Personal"}
          </BotaoResumo>
          <BotaoResumo onClick={() => setConfidencial(!confidencial)}>
            {isPtbr ? "Confidencial" : "Confidential"}
          </BotaoResumo>
          <BotaoResumo
            onClick={() =>
              setProfResumo(true) &
              setConfidencial(false) &
              setPessResumo(false)
            }
          >
            {isPtbr ? "Profissional" : "Professional"}
          </BotaoResumo>
        </div>
      </TituloDiv>
      {(PessResumo && <ResumoPess />) ||
        // (confidencial && <ConfidencialModal />) ||
        (ProfResumo && <ResumoProf />)}
    </TextosDiv>
  );
}

const TextosDiv = styled.div``;

const TituloDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 12px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: -webkit-fill-available;
  }
  button:nth-child(2) {
    background-color: #bd0000a2;
    border: 1px solid #bd0000;
  }
`;

const BotaoResumo = styled.button`
  color: white;
  padding: 6px 0;
  font-family: "Azeret Mono", monospace;
  border: 1px solid #52525b;
  border-radius: 16px;
  min-width: 103px;
  background-color: #52525bbe;
  cursor: pointer;
`;
