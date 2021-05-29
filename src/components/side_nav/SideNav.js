import React from "react";
import styled from "styled-components";

import { ReactComponent as SpotifyLogo } from "../../assets/svg/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/home_icon.svg";
import { ReactComponent as LibraryIcon } from "../../assets/svg/library_icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search_icon.svg";

import "./side_nav.scss";

const SideNavigation = styled.div`
  display: inline-block;
  width: 300px;
  height: calc(100vh - 90px);
  background-color: #000;
  padding: 15px 10px;
`;
const LogoWrapper = styled.div`
  height: 40px;
  max-width: 131px;
  margin: 10px 15px 25px;
`;

function SideNav() {
  return (
    <SideNavigation>
      <LogoWrapper>
        <SpotifyLogo />
      </LogoWrapper>
      <ul>
        <li>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <SearchIcon />
          <span>Search</span>
        </li>
        <li>
          <LibraryIcon />
          <span>Your Library</span>
        </li>
      </ul>
    </SideNavigation>
  );
}

export default SideNav;
