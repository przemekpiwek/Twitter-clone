import React from "react";
import styled from "styled-components";
import SocialBar from "./SocialBar";
import { COLORS } from "../constants";

const BigTweet = () => {
  return (
    <TweetContainer>
      <TweetAction>I retweeted some shit</TweetAction>
      <TweetDetailDiv>
        <TweeterImg />
        <TweeterInfoDiv>
          <TweeterName>Name</TweeterName>
          <TweeterHandle>handle</TweeterHandle>
          <TweetDate>Date</TweetDate>
        </TweeterInfoDiv>
      </TweetDetailDiv>
      <TweeterTweet>blah blah</TweeterTweet>
      <TweetImage />
      <SocialBar />
    </TweetContainer>
  );
};

export default BigTweet;

const TweetContainer = styled.div`
  padding: 0 15px;
`;
const TweetAction = styled.div`
  display: flex;
  text-align: left;
  color: ${COLORS.secondaryFont};
  font-size: 13px;
`;
const TweetDetailDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const TweeterImg = styled.img`
  height: 49px;
  width: 49px;
  border-radius: 50%;
`;
const TweeterInfoDiv = styled.div`
  display: flex;
`;
const TweeterName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;
const TweeterHandle = styled.p`
  font-size: 15px;
  color: ${COLORS.secondaryFont};
  margin-left: 5px;
`;
const TweetDate = styled.p`
  font-size: 15px;
  color: ${COLORS.secondaryFont};
  margin-left: 5px;
`;
const TweeterTweet = styled.p`
  font-size: 15px;
`;
const TweetImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid ${COLORS.secondaryFont};
`;
