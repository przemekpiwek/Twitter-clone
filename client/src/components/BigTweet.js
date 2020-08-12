import React from "react";
import styled from "styled-components";
import SocialBar from "./SocialBar";
import { COLORS } from "../constants";

const SmallTweet = ({
  author,
  date,
  status,
  numLikes,
  numRetweets,
  retweetFrom,
  isLiked,
  isRetweeted,
  media,
}) => {
  let hasPicture;
  if (media.length > 0) {
    hasPicture = true;
  }

  return (
    <TweetContainer>
      <TweetAction>I retweeted some shit</TweetAction>
      <TweetDetailDiv>
        <TweeterImg src={author.avatarSrc} />
        <TweeterInfoDiv>
          <TweeterName>{author.displayName}</TweeterName>
          <TweeterHandle>{author.handle}</TweeterHandle>
          <TweetDate>{date}</TweetDate>
        </TweeterInfoDiv>
      </TweetDetailDiv>
      <TweeterTweet>{status}</TweeterTweet>
      {hasPicture && <TweetImage src={media[0].url} />}
      <SocialBar
        isLiked={isLiked}
        isRetweeted={isRetweeted}
        numRetweets={numRetweets}
        numLikes={numLikes}
      />
    </TweetContainer>
  );
};

export default SmallTweet;

const TweetContainer = styled.div`
  padding: 0 15px;
  cursor: pointer;

&:hover {
  background: ${COLORS.tertiary};
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
  margin-top: 10px;
`;
const TweetImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid #fbfbfb;
  max-width: 600px;
  margin-top: 10px;
`;
