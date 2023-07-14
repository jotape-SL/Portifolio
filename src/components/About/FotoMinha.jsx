import React from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function FotoMinha() {
  return (
    <div>
      <ProfilePic
        src="./perfil.png"
        alt="uma pessoa bem bonita, mas conhecida como eu!"
      />
    </div>
  );
}

const ProfilePic = styled.img`
  padding: 5px;
  border: 2px solid ${cinzaClaro};
  max-width: 100%;
  border-radius: 10px;
  animation: border 3s ease-in-out;
  @media (max-width: 655px) {
    max-width: 95vw;
  }
`;
