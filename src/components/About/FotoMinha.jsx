import React from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function FotoMinha() {
  return (
    <ProfileDiv>
      <img
        src="./perfil.png"
        alt="uma pessoa bem bonita, mas conhecida como eu!"
      />
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 50vw;
    border-radius: 10px;
  }
`;
