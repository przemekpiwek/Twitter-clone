import React from "react";
import { Link } from "react-router-dom";

import {
  FiHome,
  RiNotification4Line,
  FiUser,
  FiBookmark,
} from "react-icons/fi";

import catLogo from "../assets/logo.svg";

function Sidebar() {
  return (
    <div>
      <Catlogo />
      <SidebarLink>
        <Icon />
        Home
      </SidebarLink>
      <SidebarLink>
        <Icon />
        Profile
      </SidebarLink>
      <SidebarLink>
        <Icon />
        Notifications
      </SidebarLink>
      <SidebarLink>
        <Icon />
        Bookmarks
      </SidebarLink>
    </div>
  );
}

export default Sidebar;

const Catlogo = styled.img``;
const SidebarLink = styled.div``;
const Icon = styled.img``;
