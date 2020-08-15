import React from "react";
import styled from "styled-components";
import SmallTweet from "../components/SmallTweet";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function Feed({ addedTweet }) {
  const [dataFetched, SetDataFetched] = React.useState(null);
  const [feed, SetFeed] = React.useState([]);
  const [error, SetError] = React.useState("");

  React.useEffect(() => {
    SetDataFetched("loading");
    const fetchData = async () => {
      try {
        const response = await fetch("/api/me/home-feed", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const JSONdata = await response.json();
        const feedTweets = Object.values(JSONdata.tweetsById).reverse();
        SetFeed(feedTweets);
        SetDataFetched("idle");
      } catch (err) {
        SetError("Status 404");
      }
    };
    fetchData();
  }, [addedTweet]);

  if (dataFetched != "idle") {
    return <p>loading...</p>;
  } else if (error == "Status 404") {
    return <ErrorMessage />;
  } else {
    return (
      <FeedContainer>
        {feed.map((item, index) => (
          <SmallTweet
            key={index}
            id={item.id}
            author={item.author}
            date={item.timestamp}
            status={item.status}
            numLikes={item.numLikes}
            numRetweets={item.numRetweets}
            retweetFrom={item.retweetFrom}
            isLiked={item.isLiked}
            isRetweeted={item.isRetweeted}
            media={item.media}
          />
        ))}
      </FeedContainer>
    );
  }
}

export default Feed;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(230, 236, 240);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
