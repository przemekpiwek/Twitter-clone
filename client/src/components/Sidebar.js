import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";

import { FiHome, FiBell, FiUser, FiBookmark } from "react-icons/fi";

import catLogo from "../assets/logo.svg";

function Sidebar() {
  return (
    <SidebarDiv>
      <Catlogo
        src={catLogo}
        style={{ width: "35px", height: "35px", padding: "10px" }}
      />
      <SidebarLink to="/">
        <span>
          <FiHome style={{ width: "27px", height: "27px" }} />
          <SidebarText>Home</SidebarText>
        </span>
      </SidebarLink>
      <SidebarLink to="/profile">
        <span>
          <FiUser style={{ width: "27px", height: "27px" }} />
          <SidebarText>Profile</SidebarText>
        </span>
      </SidebarLink>
      <SidebarLink to="/notifications">
        <span>
          <FiBell style={{ width: "27px", height: "27px" }} />
          <SidebarText>Notifications</SidebarText>
        </span>
      </SidebarLink>
      <SidebarLink to="/bookmarks">
        <span>
          <FiBookmark style={{ width: "27px", height: "27px" }} />
          <SidebarText>Bookmarks</SidebarText>
        </span>
      </SidebarLink>
    </SidebarDiv>
  );
}

export default Sidebar;

const SidebarDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 275px;
  height: 100vh;
  padding: 0 10px;
  border: 1px solid rgb(230, 236, 240);
`;
const Catlogo = styled.img``;
const SidebarLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;

  & > span {
    padding: 10px 20px;
    border-radius: 50px;
    align-items: center;
    display: flex;
  }
  &:hover > span {
    background: ${COLORS.secondary};
    cursor: pointer;
    color: ${COLORS.primary};
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const SidebarText = styled.span`
  font-size: 19px;
  line-height: 25px;
  font-weight: bold;
  margin-left: 20px;
`;
