import React, { useState } from "react";
import styled from "styled-components";

function NoiseVideo({ src, type }) {
  return (
    <BgVideo src={src} type={type} autoPlay loop playsInline muted></BgVideo>
  );
}

const BgVideo = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  height: 120vh;
  background-size: contain;
  overflow: hidden;
`;

export default NoiseVideo;
