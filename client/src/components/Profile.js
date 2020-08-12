import React from "react";
import ProfileFeed from "./ProfileFeed";
import Sidebar from "./Sidebar";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";

const Profile = ({ currentUser, status }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            maxWidth: "800px",
            borderRight: "1px solid rgb(230, 236, 240)",
          }}
        >
          <ProfileHeader currentUser={currentUser} status={status} />
          <ProfileFeed />
        </div>
      </div>
    </>
  );
};

export default Profile;
