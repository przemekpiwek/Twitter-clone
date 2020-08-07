import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Profile = ({ currentUser, status }) => {
  if (currentUser) {
    console.log(currentUser.profile);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TweetHeader>Home</TweetHeader>
        <TweetSubheader>
          <ProfilePic />
        </TweetSubheader>
      </div>
    </div>
  );
};

export default Profile;

const TweetHeader = styled.div`
  height: 53px;
  border: 1px solid rgb(230, 236, 240);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 0 15px;
  background: red;
  font-weight: bold;
`;

const TweetSubheader = styled.div`
  padding: 0 15px;
`;

const ProfilePic = styled.img`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
`;
