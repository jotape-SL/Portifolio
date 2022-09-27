import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <nav>
      <img src="https://placekitten.com/176/300" alt="*" />
      <NavContainer>
        <NavLinks>Sobre</NavLinks>
        <NavLinks>Projetos</NavLinks>
        <NavLinks>Contato</NavLinks>
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
  height: calc(100vh - 300px);
  width: 176px;
  border: 1px solid white;
  box-shadow: 0 0 20px 5px lightblue;
`;
const NavLinks = styled.li`
  transform: rotate(-90deg);
  font-size: 0.9rem;
  color: white;
  padding: 1rem;
  text-align: center;
  :hover {
    color: lightblue;
  }
`;
