import React from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import { COLORS } from "../constants";

const SocialBar = () => {
  return (
    <SociaBarDiv>
      <ChatIcon />
      <RepeatIcon />
      <HeartIcon />
      <UploadIcon />
    </SociaBarDiv>
  );
};

export default SocialBar;

const SocialBarDiv = styled.div`
  display: flex;
`;

const ChatIcon = styled(FiMessageCircle)`
  height: 24px;
  width: 24px;
  color: ${COLORS.secondaryFont};
`;
const RepeatIcon = styled(FiRepeat)`
  height: 24px;
  width: 24px;
  color: ${COLORS.secondaryFont};
`;
const HeartIcon = styled(FiHeart)`
  height: 24px;
  width: 24px;
  color: ${COLORS.secondaryFont};
`;
const UploadIcon = styled(FiUpload)`
  height: 24px;
  width: 24px;
  color: ${COLORS.secondaryFont};
`;
