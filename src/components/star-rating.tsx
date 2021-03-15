import React from "react";

import styled from "@emotion/styled";

interface IStarRatingProps {
  value: number;
}

export const StarRating: React.FC<IStarRatingProps> = ({ value }) => {
  let num: number = Math.round(value);

  return (
    <Container>
      {new Array(num).fill(0).map((_, index) => (
        <Star key={index} />
      ))}
      {new Array(5 - num).fill(0).map((_, index) => (
        <BlankStar key={index} />
      ))}
    </Container>
  );
};

export const StarRatingSmall: React.FC<IStarRatingProps> = ({ value }) => {
  let num: number = Math.round(value);

  return (
    <Container>
      {new Array(num).fill(0).map((_, index) => (
        <SmallStar key={index} />
      ))}
      {new Array(5 - num).fill(0).map((_, index) => (
        <SmallBlankStar key={index} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

function Star(){
  return (
    <svg height="20" width="20" viewBox="0 0 20 20"><linearGradient data-v-21f5376e="" id="zv14" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#ffd400"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#e4e5ed"></stop></linearGradient> <filter data-v-21f5376e="" id="vton1p" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#zv14)" stroke="#fff" filter="url(#vton1p)"></polygon> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#zv14)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#zv14)"></polygon></svg>
  )
}
function BlankStar(){
  return (
    <svg height="20" width="20" viewBox="0 0 20 20"><linearGradient data-v-21f5376e="" id="69mgsi" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="0%" stop-color="#ffd400"></stop> <stop data-v-21f5376e="" offset="0%" stop-color="#e4e5ed"></stop></linearGradient> <filter data-v-21f5376e="" id="3dgie" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#69mgsi)" stroke="#fff" filter="url(#3dgie)"></polygon> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#69mgsi)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="9.200000000000001,0.8,5.6000000000000005,6.800000000000001,0,7.6000000000000005,4,13.600000000000001,2.8000000000000003,20,9.200000000000001,17.2,15.200000000000001,20,14.4,13.600000000000001,18.400000000000002,7.6000000000000005,12.4,6.800000000000001" fill="url(#69mgsi)"></polygon></svg>
  )
}

function SmallStar(){
  return (
    <svg height="13" width="13" viewBox="0 0 13 13"><linearGradient data-v-21f5376e="" id="dlk1us" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#ffd400"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#e4e5ed"></stop></linearGradient> <filter data-v-21f5376e="" id="hoc3si" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#dlk1us)" stroke="#fff" filter="url(#hoc3si)"></polygon> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#dlk1us)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#dlk1us)"></polygon></svg>
  )
}
function SmallBlankStar(){
  return (
    <svg height="13" width="13" viewBox="0 0 13 13"><linearGradient data-v-21f5376e="" id="qxsl1" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="0%" stop-color="#ffd400"></stop> <stop data-v-21f5376e="" offset="0%" stop-color="#e4e5ed"></stop></linearGradient> <filter data-v-21f5376e="" id="iy7ryf" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#qxsl1)" stroke="#fff" filter="url(#iy7ryf)"></polygon> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#qxsl1)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="5.98,0.52,3.64,4.42,0,4.94,2.6,8.84,1.82,13,5.98,11.18,9.88,13,9.36,8.84,11.96,4.94,8.06,4.42" fill="url(#qxsl1)"></polygon></svg>
  )
}