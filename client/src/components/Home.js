import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Feed from "../components/Feed";
import TweetInput from "../components/TweetInput";
import errorMessage from "../components/errorMessage";

const Home = ({ currentUser, status, error }) => {
  const [addedTweet, setAddedTweet] = React.useState(false);

  if (error == "Status 404") {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, maxWidth: "800px" }}>
            <errorMessage />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, maxWidth: "800px" }}>
            <TweetHeader>Home</TweetHeader>
            <TweetSubheader>
              {currentUser && (
                <TweetInput
                  currentUser={currentUser}
                  addedTweet={addedTweet}
                  setAddedTweet={setAddedTweet}
                />
              )}
            </TweetSubheader>
            <Feed addedTweet={addedTweet} />
          </div>
        </div>
      </>
    );
  }
};

export default Home;

const TweetHeader = styled.div`
  height: 53px;
  border-bottom: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  padding: 5px 15px;
  margin: 5px 0;
  font-weight: bold;
  font-size: 19px;
`;

const TweetSubheader = styled.div`
  padding: 5px 15px;
  border-bottom: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
`;
