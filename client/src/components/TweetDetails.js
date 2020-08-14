import React from "react";
import Sidebar from "./Sidebar";
import BigTweet from "./BigTweet";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

const TweetDetails = () => {
  const [dataFetched, SetDataFetched] = React.useState(null);
  const [error, SetError] = React.useState("");
  const [data, SetData] = React.useState([]);
  let { tweetId } = useParams();

  React.useEffect(() => {
    SetDataFetched("loading");
    const fetchTweet = async () => {
      try {
        const response = await fetch(`/api/tweet/${tweetId}`, {
          method: "get",
          headers: { "Content-type": "application/json" },
          headers: {
            Accept: "application/json",
          },
        });
        const JSONdata = await response.json();
        const tweet = Object.values(JSONdata);
        SetData(tweet[0]);
        SetDataFetched("idle");
      } catch (err) {
        SetError("Status 404");
        console.error(err);
      }
    };
    fetchTweet();
  }, []);

  if (dataFetched != "idle") {
    return <p>loading...</p>;
  } else if (error == "Status 404") {
    return <p>There was an error retrieving the data.</p>;
  } else {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, maxWidth: "800px" }}>
            <TweetHeader>
              <span style={{ display: "flex" }}>
                <Link to="/">
                  <ArrowIcon />
                </Link>
                Home
              </span>
            </TweetHeader>
            <BigTweet
              author={data.author}
              date={data.timestamp}
              status={data.status}
              numLikes={data.numLikes}
              numRetweets={data.numRetweets}
              retweetFrom={data.retweetFrom}
              isLiked={data.isLiked}
              isRetweeted={data.isRetweeted}
              media={data.media}
            />
          </div>
        </div>
      </>
    );
  }
};

export default TweetDetails;

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

const ArrowIcon = styled(FiArrowLeft)`
  color: ${COLORS.primary};
  margin-right: 10px;
  border-radius: 50%;

  &:hover {
    background: ${COLORS.secondary};
  }
`;
