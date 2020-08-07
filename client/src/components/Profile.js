import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FiArrowLeft } from "react-icons/fi";

const Profile = ({ currentUser, status }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <TweetHeader>
            <span style={{ display: "flex" }}>
              <FiArrowLeft
                style={{
                  color: `${COLORS.primary}`,
                  marginRight: "20px",
                }}
              />
              Profile
            </span>
          </TweetHeader>
          <BannerDiv>
            {currentUser && (
              <>
                <Banner src={currentUser.profile.bannerSrc} />
                <ProfDiv>
                  <ProfilePic src={currentUser.profile.avatarSrc} />
                  <ProfileInfo>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingBottom: "30px",
                      }}
                    >
                      <FollowButton>Follow</FollowButton>
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "19px",
                        }}
                      >
                        {currentUser.profile.displayName}
                      </span>
                    </div>
                    <span style={{ color: `${COLORS.secondaryFont}` }}>
                      {`@${currentUser.profile.handle}`}
                    </span>
                    <p style={{ fontSize: "15px", lineHeight: "19.7px" }}>
                      {currentUser.profile.bio}
                    </p>
                    <div>
                      <span>{currentUser.profile.location}</span>
                      <span>{currentUser.profile.joined}</span>
                    </div>
                    <div>
                      <span>
                        {currentUser.profile.numFollowing}{" "}
                        <span style={{ color: `${COLORS.secondaryFont}` }}>
                          Following
                        </span>
                      </span>
                      <span>
                        {currentUser.profile.numFollowers}{" "}
                        <span style={{ color: `${COLORS.secondaryFont}` }}>
                          Followers
                        </span>
                      </span>
                    </div>
                  </ProfileInfo>
                </ProfDiv>
              </>
            )}
          </BannerDiv>
        </div>
      </div>
    </>
  );
};

export default Profile;

const TweetHeader = styled.div`
  height: 53px;
  border-bottom: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 15px;
  margin-top: 5px;
  font-weight: bold;
  font-size: 19px;
`;

const BannerDiv = styled.div`
  height: 30vh;
  position: relative;
`;

const Banner = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ProfilePic = styled.img`
  height: 149px;
  width: 149px;
  border-radius: 50%;
  position: absolute;
  left: 19px;
  top: -74px;
  z-index: 3;
`;

const ProfDiv = styled.div`
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 157px;
    width: 157px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: -77px;
    z-index: 2;
    background: white;
  }
`;

const ProfileInfo = styled.div`
  padding: 10px 15px;
  width: 100%;
  height: 33vh;
`;

const FollowButton = styled.button`
  display: block;
  float: right;
  background: white;
  color: ${COLORS.primary};
  padding: 15px 20px;
  border-radius: 50px;
  border: 1px solid ${COLORS.primary};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: ${COLORS.secondary};
  }
`;
