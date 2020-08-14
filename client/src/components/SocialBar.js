import React from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import { COLORS } from "../constants";

const SocialBar = ({ id, isLiked, isRetweeted, numRetweets, numLikes }) => {
  const [liked, setLiked] = React.useState(isLiked);
  const [retweeted, setRetweeted] = React.useState(isRetweeted);
  const [retweets, setRetweets] = React.useState(numRetweets);
  const [likes, setLikes] = React.useState(numLikes);

  const RepeatHandler = async () => {
    try {
      let bodyReq;
      bodyReq = retweeted ? { retweet: false } : { retweet: true };
      const response = await fetch(`/api/tweet/${id}/retweet`, {
        method: "put",
        body: JSON.stringify(bodyReq),
        headers: { "Content-type": "application/json" },
      });
      if (response.status == 200) {
        setRetweeted(!retweeted);
        if (bodyReq.retweet === false) {
          setRetweets(retweets - 1);
        } else {
          setRetweets(retweets + 1);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const LikeHandler = async () => {
    try {
      let bodyReq;
      bodyReq = liked ? { like: false } : { like: true };
      const response = await fetch(`/api/tweet/${id}/like`, {
        method: "put",
        body: JSON.stringify(bodyReq),
        headers: { "Content-type": "application/json" },
      });
      if (response.status == 200) {
        setLiked(!liked);
        if (bodyReq.like === false) {
          setLikes(likes - 1);
        } else {
          setLikes(likes + 1);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SocialBarDiv>
      <IconSpan>
        <ChatIcon />
        <IconText></IconText>
      </IconSpan>
      <IconSpan>
        <RepeatIcon
          onClick={RepeatHandler}
          style={{
            stroke: retweeted ? `${COLORS.primary}` : `${COLORS.secondaryFont}`,
          }}
        />
        <IconText
          style={{
            color: retweeted ? `${COLORS.primary}` : `${COLORS.secondaryFont}`,
          }}
        >
          {retweets}
        </IconText>
      </IconSpan>
      <IconSpan>
        <HeartIcon
          onClick={LikeHandler}
          style={{
            fill: liked ? "red" : "transparent",
            stroke: liked ? "red" : `${COLORS.secondaryFont}`,
          }}
        />
        <IconText
          style={{
            color: liked ? "red" : `${COLORS.secondaryFont}`,
          }}
        >
          {likes}
        </IconText>
      </IconSpan>
      <IconSpan>
        <UploadIcon />
        <IconText></IconText>
      </IconSpan>
    </SocialBarDiv>
  );
};

export default SocialBar;

const SocialBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 500px;
  margin: 10px 0px;
  }
`;

const ChatIcon = styled(FiMessageCircle)`
  height: 40px;
  width: 40px;
  color: ${COLORS.secondaryFont};
  justify-content: flex-start;
  border-radius: 50%;
  padding: 10px;
  overflow: visible;
`;
const RepeatIcon = styled(FiRepeat)`
  height: 40px;
  width: 40px;
  color: ${COLORS.secondaryFont};
  border-radius: 50%;
  padding: 10px;
  overflow: visible;
`;
const HeartIcon = styled(FiHeart)`
  height: 40px;
  width: 40px;
  color: ${COLORS.secondaryFont};
  border-radius: 50%;
  padding: 10px;
  overflow: visible;
`;
const UploadIcon = styled(FiUpload)`
  height: 40px;
  width: 40px;
  color: ${COLORS.secondaryFont};
  border-radius: 50%;
  padding: 10px;
  overflow: visible;
`;

const IconText = styled.p`
  font-size: 15px;
  color: ${COLORS.secondaryFont};
  font-weight: "300";
  margin-left: 5px;
`;

const IconSpan = styled.span`
  display: flex;
  align-items: center;

  &:hover > p {
    color: ${COLORS.primary};
  }
  &:hover > svg {
    color: ${COLORS.primary};
    background: ${COLORS.secondary};
  }
`;
