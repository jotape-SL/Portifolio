import { useState } from "react";
import styled from "styled-components";

export default function Resumo() {
    const [Mresumo,setMresumo] = useState(false)
    const [Presumo,setPresumo] = useState(true)
    const [Iresumo,setIresumo] = useState(false)
    return (
        <div>
            <TituloDiv>
                <h2>Sobre mim</h2>
                <BotaoResumo onClick={()=>setMresumo(!Mresumo) & setPresumo(false) & setIresumo(false)}>Muito resumido</BotaoResumo>
                <BotaoResumo onClick={()=>setPresumo(!Presumo) & setMresumo(false) & setIresumo(false)}>Padrão</BotaoResumo>
                <BotaoResumo onClick={()=>setIresumo(!Iresumo) & setPresumo(false) & setMresumo(false)}>Já somos intimos</BotaoResumo>
            </TituloDiv>
          {Mresumo && <p>A</p> || Presumo && <p>B</p> || Iresumo && <p>C</p> }
        </div>
    )
}

const TituloDiv = styled.div`
    display: flex;
    align-items: center;
`

const BotaoResumo = styled.button`
  padding: 6px;
  margin: 0 5px;
  font-weight: bold;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  background-color: rgb(251, 255, 199);
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-in-out;
    color: black;
    background-color: rgb(198, 201, 156);
  }
`;