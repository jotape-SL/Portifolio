import styled from "styled-components";
import { textos } from "./textosAbout";
import { useGlobalContext } from "../Context";

function ResumoPess() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoPess : textos.resumoPessEn;
}

function ResumoProf() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoProf : textos.resumoProfEn;
}

function ResumoConfidencial() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoConfidencial : textos.resumoConfidencialEn;
}

export { ResumoPess, ResumoProf, ResumoConfidencial };
