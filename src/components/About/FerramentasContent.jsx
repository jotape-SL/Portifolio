import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiSass,
} from "react-icons/si";

export default function AboutIcons() {
  const icons = [
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiStyledcomponents,
    SiSass,
  ];
  return (
    <>
      <FerramentaH2>Ferramentas com que trabalho</FerramentaH2>
      <IconDiv>
        {icons.map((Icon, i) => {
          let names = Icon.name.slice(2);
          if (names.charAt(0) === "N") {
            names = "Next.js";
          }

          return (
            <span key={i}>
              <Icon />
              <p href="/">{names}</p>
            </span>
          );
        })}
      </IconDiv>
    </>
  );
}

const FerramentaH2 = styled.h2`
  margin-bottom: 4rem;
  padding: 0 10%;
`;
const IconDiv = styled.div`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  text-align: center;
  gap: 1rem;
  svg {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    padding: 2% 0;
    background-color: antiquewhite;
    border-radius: 15px;
    min-width: 148px;
    border: 2px solid lightgrey;
  }
  span:hover {
    transition: 0.1s ease-in-out;
    background-color: white;
  }
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 10%;
  }
`;
