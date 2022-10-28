import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";

export default function Footer() {
  return (
    <FooterSection>
      <img src="./scrollT.png" />
    </FooterSection>
  );
}

const FooterSection = styled.section`
  img {
  }
  text-align: center;
`;
