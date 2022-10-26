import Image from "next/image";
import React from "react";
import styled from "styled-components";
import cavalin from "../../../public/horse.png";
import { begeBG } from "../../styles/UI/variaveis";

export default function Footer() {
  return (
    <FooterSection>
      <Image src={cavalin} />
    </FooterSection>
  );
}

const FooterSection = styled.section`
  padding: 10rem 0;
  text-align: center;
  background-color: ${begeBG};
  z-index: 998;
`;
