import React from "react";
import styled from "styled-components";
import SocialBar from "./SocialBar";
import { COLORS } from "../constants";
import moment from "moment";
import { FiRepeat } from "react-icons/fi";

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
  let isRetweet;
  if (media.length > 0) {
    hasPicture = true;
  }
  if (retweetFrom != null) {
    isRetweet = true;
  }

  console.log(retweetFrom);
  return (
    <TweetContainer>
      {isRetweet && (
        <TweetAction>
          <FiRepeat style={{ marginRight: "10px" }} />
          {retweetFrom.displayName} Remeowed
        </TweetAction>
      )}
      <div style={{ display: "flex" }}>
        <LeftBlock>
          <TweeterImg src={author.avatarSrc} />
        </LeftBlock>
        <TweetDetailDiv>
          <TweeterInfoDiv>
            <TweeterName>{author.displayName}</TweeterName>
            <TweeterHandle>@{author.handle}</TweeterHandle>
            <TweetDate>{moment(date).format("DD/MM/YYYY")}</TweetDate>
          </TweeterInfoDiv>
          <TweeterTweet>{status}</TweeterTweet>
          {hasPicture && <TweetImage src={media[0].url} />}
          <SocialBar
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            numRetweets={numRetweets}
            numLikes={numLikes}
          />
        </TweetDetailDiv>
      </div>
    </TweetContainer>
  );
};

export default SmallTweet;

const TweetContainer = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

&:hover {
  background: ${COLORS.tertiary};
`;

const LeftBlock = styled.div`
  display: block;
  margin-left: 10px;
  margin-right: 10px;
`;
const TweetAction = styled.div`
  display: flex;
  text-align: left;
  color: ${COLORS.secondaryFont};
  font-size: 13px;
  margin-left: 45px;
  margin-bottom: 15px;
`;
const TweeterInfoDiv = styled.div`
  display: flex;
`;
const TweetDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
