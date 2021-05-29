import React from "react";
import styled from "styled-components";

import LikeIcon from './LikeIcon';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  width: 300px;
  padding: 0px 15px;
`;
const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
  img {
    width: 100%;
  }
`;
const InforWrapper = styled.div`
  padding: 0 15px;
  min-width: 50%;
  max-width: 200px;
  p {
    margin: 0;
  }
  .track-name {
    color: #fff;
    font-size: 14px;
  }
  .artist-name {
    color: #b3b3b3;
    font-size: 12px;
  }
`;

function ActivePlayingcard({ track , favToggle }) {
 
  const { title, artist, image, favourite, trackId  } = track;

  return (
    <CardWrapper>
      <ImageWrapper>
        <img alt="active thumbnail" src={image} />
      </ImageWrapper>
      <InforWrapper>
        <p className="track-name">{title}</p>
        <p className="artist-name">{artist}</p>
      </InforWrapper>
      <LikeIcon 
        favourite={favourite}
        favToggle={favToggle}
        />
    </CardWrapper>
  );
}

export default ActivePlayingcard;
