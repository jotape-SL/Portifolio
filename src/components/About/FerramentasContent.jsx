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
  SiPython,
  SiBlender,
} from "react-icons/si";
import { useGlobalContext } from "../Context";
import { verdeBG } from "../../styles/UI/variaveis";

export default function AboutIcons() {
  const { isPtbr } = useGlobalContext();
  const icons = [
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiStyledcomponents,
    SiSass,
    SiPython,
    SiBlender,
  ];
  return (
    <>
      <h2>Skills</h2>
      <LogosDiv>
        <LogosSlideDiv className="slide1">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <>
                <span key={i}>
                  <Icon />
                </span>
              </>
            );
          })}
        </LogosSlideDiv>
        <LogosSlideDiv className="slide2">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <span key={i}>
                <Icon />
              </span>
            );
          })}
        </LogosSlideDiv>
      </LogosDiv>
    </>
  );
}

const LogosDiv = styled.div`
  display: flex;
  width: -webkit-fill-available;
  padding: 0 0 80px 0;
  margin-bottom: 2rem;
  flex-direction: row;
  /* &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    content: "";
    z-index: 2;
  }
  &::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), ${verdeBG});
  }
  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), ${verdeBG});
  } */
  &:hover div {
    animation-play-state: paused;
  }
  .slide1 {
    flex-wrap: wrap;
    animation: 5s slide1 infinite linear;
  }
  .slide2 {
    flex-wrap: wrap;
    animation: 5s slide2 infinite linear;
  }
`;

const LogosSlideDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;

  position: absolute;
  left: 0;
  span svg {
    margin: 0 1rem;
    height: 80px;
    font-size: 5rem;
  }
  @keyframes slide1 {
    0% {
      left: 0%;
    }
    100% {
      left: -100%;
    }
  }
  @keyframes slide2 {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;
