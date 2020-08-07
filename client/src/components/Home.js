import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { COLORS } from "../constants";

const Home = ({ currentUser, status }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <TweetHeader>Home</TweetHeader>
          <TweetSubheader>
            {currentUser && (
              <>
                <div style={{ display: "flex" }}>
                  <ProfilePic src={currentUser.profile.avatarSrc} />
                  <TextArea placeholder="What's Happening?" />
                </div>
                <div style={{ display: "flex" }}>
                  <SocialBar />
                  <TweetButton>Meow</TweetButton>
                </div>
              </>
            )}
          </TweetSubheader>
          {(status = "loading" && <div>Loading</div>)}
        </div>
      </div>
    </>
  );
};

export default Home;

const TweetHeader = styled.div`
  height: 53px;
  border-bottom: 1px solid rgb(230, 236, 240);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 15px;
  margin: 5px 0;
  font-weight: bold;
  font-size: 19px;
`;

const TweetSubheader = styled.div`
  padding: 5px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;

const ProfilePic = styled.img`
  height: 49px;
  width: 49px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
`;

const TextArea = styled.textarea`
  padding-top: 12px;
  font-size: 19px;
  border: 0px;
  width: 100%;
  resize: none;
  height: 20vh;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SocialBar = styled.div`
  display: flex;
  flex: 1;
`;
const TweetButton = styled.button`
  border-radius: 50px;
  font-size: 15px;
  padding: 15px 25px;
  border: 0px;
  color: white;
  font-weight: bold;
  background: ${COLORS.secondary};
`;
