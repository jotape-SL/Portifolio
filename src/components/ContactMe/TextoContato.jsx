import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

export default function TextoContato() {
  const { isPtbr } = useGlobalContext();
  return (
    <TextoDiv>
      <p>
        {isPtbr
          ? "Gostou de alguns dos meu projetos? Sinta-se à vontade para dar um feedback! :)"
          : "Liked any of my works, fell free to give me a feedback! :)"}
      </p>
    </TextoDiv>
  );
}

const TextoDiv = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
  }
`;

const FuturaImagemDiv = styled.div`
  margin: 5rem 0;
  img {
    width: 400px;
  }
`;
