import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { COLORS } from "../constants";
import { FiArrowLeft } from "react-icons/fi";

const Notifications = () => {
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
              Notifications
            </span>
          </TweetHeader>
        </div>
      </div>
    </>
  );
};

export default Notifications;

const TweetHeader = styled.div`
  height: 53px;
  border-bottom: 1px solid rgb(230, 236, 240);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 15px;
  margin: 5px 0;
  font-weight: bold;
  font-size: 19px;
`;
