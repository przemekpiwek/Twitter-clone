import React from "react";
import styled from "styled-components";
import SocialBar from "./SocialBar";
import { COLORS } from "../constants";
import moment from "moment";
import { FiRepeat } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const SmallTweet = ({
  id,
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

  let history = useHistory();

  const profileHandler = (ev) => {
    ev.persist();
    ev.stopPropagation();
    history.push(`/${author.handle}`);
  };

  const clickHandler = (ev) => {
    ev.persist();
    history.push(`/tweet/${id}`);
  };

  return (
    <TweetContainer onClick={clickHandler} tabindex="0">
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
            {/* <StyledLink to={`/${author.handle}`}> */}
            <TweeterName onClick={profileHandler} tabindex="1">
              {author.displayName}
            </TweeterName>
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
            id={id}
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
  justify-content: flex-start;
`;
const TweetDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;
const TweeterImg = styled.img`
  height: 49px;
  width: 49px;
  border-radius: 50%;
`;

const TweeterName = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: black;

  &:hover {
    text-decoration: underline;
  }
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
