import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FiArrowLeft, FiMapPin, FiCalendar } from "react-icons/fi";

const Profile = ({ currentUser, status }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              borderBottom: "1px solid rgb(230, 236, 240)",
            }}
          >
            <TweetHeader>
              <span style={{ display: "flex" }}>
                <Link to="/">
                  <ArrowIcon />
                </Link>
                Profile
              </span>
            </TweetHeader>
            {currentUser && (
              <>
                <BannerDiv>
                  <Banner src={currentUser.profile.bannerSrc} />
                </BannerDiv>
                <ProfDiv>
                  <ProfilePic src={currentUser.profile.avatarSrc} />
                  <ProfileInfo>
                    <FollowDiv>
                      <FollowButton>Follow</FollowButton>
                    </FollowDiv>
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
                    <div style={{ marginTop: "5px" }}>
                      <span
                        style={{
                          color: `${COLORS.secondaryFont}`,
                          marginTop: "20px",
                        }}
                      >
                        {`@${currentUser.profile.handle}`}
                      </span>
                    </div>
                    <BioParagraph>{currentUser.profile.bio}</BioParagraph>
                    <div style={{ display: "flex" }}>
                      <InfoSpan>
                        <FiMapPin style={{ marginRight: "5px" }} />
                        {currentUser.profile.location}
                      </InfoSpan>
                      <InfoSpan>
                        <FiCalendar style={{ marginRight: "5px" }} />
                        {currentUser.profile.joined}
                      </InfoSpan>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <span>
                        <FollowNumSpan>
                          {currentUser.profile.numFollowing}{" "}
                        </FollowNumSpan>
                        <FollowTextSpan>Following</FollowTextSpan>
                      </span>
                      <span>
                        <FollowNumSpan>
                          {currentUser.profile.numFollowers}{" "}
                        </FollowNumSpan>
                        <FollowTextSpan>Followers</FollowTextSpan>
                      </span>
                    </div>
                  </ProfileInfo>
                  <TabBar>
                    <Tab>Tweets</Tab>
                    <Tab>Media</Tab>
                    <Tab>Likes</Tab>
                  </TabBar>
                </ProfDiv>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

const FollowDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

const FollowTextSpan = styled.span`
  color: ${COLORS.secondaryFont};
  margin-right: 30px;
  font-weight: 300;
`;

const FollowNumSpan = styled.span`
  font-weight: 800;
`;

const InfoSpan = styled.span`
  color: ${COLORS.secondaryFont};
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const ArrowIcon = styled(FiArrowLeft)`
  color: ${COLORS.primary};
  margin-right: "20px";
`;

const BioParagraph = styled.p`
  font-size: 15px;
  line-height: 19.7px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

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

const TabBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 50px;
`;
const Tab = styled.button`
  flex-grow: 1;
  text-align: center;
  font-weight: 800;
  color: ${COLORS.secondaryFont};
  padding: 20px 0;
  background: white;
  border: 0px;

  &:focus {
    outline: none;
  }

  &:active {
    background: ${COLORS.secondary};
    border-bottom: 2px solid ${COLORS.primary};
    outline: none;
  }
`;
