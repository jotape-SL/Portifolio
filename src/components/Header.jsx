import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <nav>
      <img src="https://placekitten.com/151/300" alt="*" />
      <NavContainer>
        <NavLinks>
          <a>Sobre</a>
        </NavLinks>
        <NavLinks>
          <a>Projetos</a>
        </NavLinks>
        <NavLinks>
          <a>Contato</a>
        </NavLinks>
      </NavContainer>
    </nav>
  );
}

const NavContainer = styled.ul`
  background-color: black;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: 0;
  height: calc(100vh - 305px);
  width: 150px;
  border: 1px solid white;
  box-shadow: 0 0 6px 0px lightblue;
`;
const NavLinks = styled.li`
  font-weight: bold;
  font-size: 1.2rem;
  transform: rotate(-90deg);
  color: white;
  padding: 1rem;
  text-align: center;
  :hover {
    color: lightblue;
  }
  a {
    cursor: pointer;
  }
`;
