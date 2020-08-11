import React from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import { COLORS } from "../constants";

const SocialBar = ({ isLiked, isRetweeted, numRetweets, numLikes }) => {
  const [liked, setLiked] = React.useState(isLiked);
  const [retweeted, setRetweeted] = React.useState(isRetweeted);

  return (
    <SocialBarDiv>
      <IconSpan>
        <ChatIcon />
        <IconText></IconText>
      </IconSpan>
      <IconSpan>
        <RepeatIcon />
        <IconText>{numRetweets}</IconText>
      </IconSpan>
      <IconSpan>
        <HeartIcon style={{ fill: liked ? "red" : "transparent" }} />
        <IconText>{numLikes}</IconText>
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
