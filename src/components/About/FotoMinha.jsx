import React from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function FotoMinha() {
  return (
    <div>
      <ProfilePic
        src="https://placekitten.com/1000/1000"
        alt="uma pessoa bem bonita, mas conhecida como eu "
      />
    </div>
  );
}

const ProfilePic = styled.img`
  padding: 5px;
  border: 2px solid ${cinzaClaro};
  max-width: 400px;
  border-radius: 10px;
  animation: border 3s ease-in-out;
`;
