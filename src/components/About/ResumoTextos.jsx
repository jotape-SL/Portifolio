import styled from "styled-components";
import { textos } from "./textosAbout";
import { useGlobalContext } from "../Context";

function ResumoM() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoMPT : textos.resumoMEN;
}

function ResumoP() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoPPT : textos.resumoPEN;
}

function ResumoI() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoIPT : textos.resumoIEN;
}

const PTextos = styled.p`
  font-size: 1.5rem;
  line-height: 20px;
  margin-bottom: 2rem;
  min-height: 540px;
`;
export { ResumoM, ResumoP, ResumoI };
