import React from "react";
import styled from "styled-components";

export default function TextoContato() {
  return (
    <TextoDiv>
      <p>
        Gostou do meu portfólio ou de alguns dos meu projetos? Sinta-se à
        vontade para mandar um feedback!!
      </p>
      {/* <FuturaImagemDiv>
        <img
          src="/horse.png"
          alt="uma pessoa bem bonita, mas conhecida como eu "
        />
      </FuturaImagemDiv> */}
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
