import React, { useState } from "react";
import styled from "styled-components";

import ActivePlayingcard from "../audio_player_card/ActivePlayingcard";
import AudioPlayer from "./AudioPlayer";

import TracksData from '../../assets/TracksData';

const FooterWrapper = styled.div`
  background: #181818;
  border-top: 1px solid #282828;
  height: 90px;
  padding: 15px 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
`;

function AudioPlayerWrapper() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [tracksData, updateTracksData] = useState(TracksData);

const favToggle = () => {
    const updatedTrack= tracksData[trackIndex];
    updatedTrack.favourite = !updatedTrack.favourite;
    console.log(updatedTrack);
    updateTracksData(
      tracksData.map((track, trackIndex) => {
        if (track.id === trackIndex){
          return updatedTrack;
        } 
        return track;
      })
    );
}

  return (
    <FooterWrapper>
      <ActivePlayingcard 
        track={tracksData[trackIndex]} 
        favToggle={favToggle}
        />
      <AudioPlayer
        tracks={tracksData}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
    </FooterWrapper>
  );
}

export default AudioPlayerWrapper;
