import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { ResumoPess, ResumoProf } from "./ResumoTextos";

export default function Resumo() {
  const { isPtbr } = useGlobalContext();
  const [PessResumo, setPessResumo] = useState(false);
  const [confidencial, setConfidencial] = useState(false);
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
          <BotaoResumo onClick={() => setConfidencial(true)}>
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

const TextosDiv = styled.div`
  /* min-width: 651px;
  @media (max-width: 655px) {
    min-width: 400px;
    div {
      display: block;
    }
  }
  @media (max-width: 399px) {
    min-width: 310px;
  } */
`;

const TituloDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 15px;
`;

const BotaoResumo = styled.button`
  padding: 6px;
  font-weight: bold;
  font-family: sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgb(251, 255, 199);
  cursor: pointer;
`;
