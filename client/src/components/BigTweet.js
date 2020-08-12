import React from "react";
import styled from "styled-components";
import SocialBar from "./SocialBar";
import { COLORS } from "../constants";
import moment from "moment";
import { FiRepeat } from "react-icons/fi";

const BigTweet = ({
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
  let isRetweet;
  if (media.length > 0) {
    hasPicture = true;
  }
  if (retweetFrom != null) {
    isRetweet = true;
  }

  return (
    <TweetContainer>
      {isRetweet && (
        <TweetAction>
          <FiRepeat style={{ marginRight: "10px" }} />
          {retweetFrom.displayName} Remeowed
        </TweetAction>
      )}
      <div style={{ display: "flex" }}>
        <TweeterImg src={author.avatarSrc} />
        <TweetDetailDiv>
          <TweeterName>{author.displayName}</TweeterName>
          <TweeterHandle>@{author.handle}</TweeterHandle>
        </TweetDetailDiv>
      </div>
      <TweeterTweet Tweet>{status}</TweeterTweet>
      {hasPicture && <TweetImage src={media[0].url} />}
      <TweetDate>{moment(date).format("DD/MM/YYYY")}</TweetDate>
      <SocialBar
        isLiked={isLiked}
        isRetweeted={isRetweeted}
        numRetweets={numRetweets}
        numLikes={numLikes}
      />
    </TweetContainer>
  );
};

export default BigTweet;

const TweetContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction:column;
  cursor: pointer;

&:hover {
  background: ${COLORS.tertiary};
`;
const TweetAction = styled.div`
  display: flex;
  text-align: left;
  color: ${COLORS.secondaryFont};
  font-size: 13px;
  margin-left: 35px;
  margin-bottom: 15px;
`;
const TweetDetailDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10px;
`;
const TweeterImg = styled.img`
  height: 49px;
  width: 49px;
  border-radius: 50%;
`;
const TweeterName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;
const TweeterHandle = styled.p`
  font-size: 13px;
  color: ${COLORS.secondaryFont};
  margin-top: 5px;
`;
const TweetDate = styled.p`
  font-size: 13px;
  color: ${COLORS.secondaryFont};
  margin-top: 15px;
`;
const TweeterTweet = styled.p`
  font-size: 15px;
  margin-top: 10px;
  line-height: 20px;
`;
const TweetImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid #fbfbfb;
  max-width: 600px;
  margin-top: 10px;
`;
