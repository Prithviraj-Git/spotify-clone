import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as LikeIconImg } from "../../assets/svg/like_icon.svg";
import './audio-card.scss';

const LikeIconState = styled.div`
  fill: ${props => props.active ? "#1db954" : "transparent"};
  stroke: ${props => props.active ? "#1db954" : "white"};
`;


function LikeIcon(props) {
  const { favourite } = props;

  return (
    <LikeIconState active={favourite} onClick={props.favToggle}>
      <LikeIconImg className="like-icon"/>
    </LikeIconState>
  );
}

export default LikeIcon;
