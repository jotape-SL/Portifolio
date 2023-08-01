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
                <LogosSpan key={i}>
                  <Icon title={names} />
                  <span className="texte">{names}</span>
                </LogosSpan>
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
              <LogosSpan key={i}>
                <Icon title={names} />
                <span className="texte">{names}</span>
              </LogosSpan>
            );
          })}
        </LogosSlideDiv>
        <LogosSlideDiv className="slide3">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <LogosSpan key={i}>
                <Icon title={names} />
                <span className="texte">{names}</span>
              </LogosSpan>
            );
          })}
        </LogosSlideDiv>
      </LogosDiv>
    </>
  );
}

const LogosDiv = styled.div`
  display: flex;
  padding: 0 0 80px 0;
  margin-bottom: 2rem;
  &:hover div {
    animation-play-state: paused;
  }
  .slide1 {
    animation: 5s slide1 infinite linear;
  }
  .slide2 {
    overflow: hidden;
    animation: 5s slide2 infinite linear;
  }
  .slide3 {
    overflow: hidden;
    animation: 5s slide3 infinite linear;
  }
`;

const LogosSlideDiv = styled.div`
  width: 1008px;
  display: flex;
  position: absolute;
  left: 0;
  @keyframes slide1 {
    0% {
      left: 0%;
    }
    100% {
      left: -1008px;
    }
  }
  @keyframes slide2 {
    0% {
      left: 1008px;
    }
    100% {
      left: 0%;
    }
  }
  @keyframes slide3 {
    0% {
      left: 2016px;
    }
    100% {
      left: 1008px;
    }
  }
`;

const LogosSpan = styled.span`
  svg {
    margin: 0 1rem;
    font-size: 5rem;
  }
  span {
    opacity: 0;
  }
  &:hover svg {
    opacity: 1;
    color: blueviolet;
  }
`;
