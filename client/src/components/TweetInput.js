import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

function TweetInput({ currentUser, setAddedTweet }) {
  const [CharacterCount, SetCharacterCount] = React.useState("280");
  const [tweetValue, setTweetValue] = React.useState("");

  React.useEffect(() => {
    const submitHandler = async (e) => {
      if (e.keyCode === 13 && tweetValue.length >= 0) {
        const response = await fetch("/api/tweet", {
          method: "post",
          body: JSON.stringify({ status: tweetValue }),
          headers: { "Content-type": "application/json" },
        });
        if (response.status === 200) {
          console.log("success");
          setAddedTweet(true);
          setTweetValue("");
        } else {
          console.error("fetching error");
        }
      }
    };

    window.addEventListener("keydown", submitHandler);
    return () => {
      window.removeEventListener("keydown", submitHandler);
    };
  }, [tweetValue]);

  const clickHandler = async (e) => {
    if (tweetValue.length >= 0) {
      const response = await fetch("/api/tweet", {
        method: "post",
        body: JSON.stringify({ status: tweetValue }),
        headers: { "Content-type": "application/json" },
      });
      if (response.status === 200) {
        console.log("success");
        setAddedTweet(true);
        setTweetValue("");
      } else {
        console.error("fetching error");
      }
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex" }}>
          <ProfilePic src={currentUser.profile.avatarSrc} />
          <TextArea
            placeholder="What's Happening?"
            value={tweetValue}
            onChange={(e) => {
              SetCharacterCount(
                Number(280) - Number(`${e.target.value.length}`)
              );
              setTweetValue(e.target.value);
              console.log(tweetValue);
            }}
          />
        </div>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          <SocialBar />
          <div style={{ display: "flex", alignItems: "center" }}>
            <CharacterCounter
              style={{
                color:
                  CharacterCount > 55
                    ? `${COLORS.secondaryFont}`
                    : CharacterCount > 0
                    ? "yellow"
                    : "red",
              }}
            >
              {CharacterCount}
            </CharacterCounter>
            <TweetButton
              onClick={clickHandler}
              disabled={CharacterCount < 0 ? true : false}
              style={{
                background:
                  CharacterCount < 280
                    ? `${COLORS.primary}`
                    : `${COLORS.secondary}`,
              }}
            >
              Meow
            </TweetButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default TweetInput;

const ProfilePic = styled.img`
  height: 49px;
  width: 49px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
`;

const TextArea = styled.textarea`
  padding-top: 12px;
  font-size: 19px;
  border: 0px;
  width: 100%;
  resize: none;
  height: 20vh;

  &:focus {
    outline: none;
    border: none;
  }
`;

const TweetButton = styled.button`
  border-radius: 50px;
  font-size: 15px;
  padding: 15px 25px;
  border: 0px;
  color: white;
  font-weight: bold;
  background: ${COLORS.secondary};
  cursor: pointer;

  &:disabled {
    background: ${COLORS.secondary} !important;
  }
`;

const CharacterCounter = styled.p`
  font-size: 0.8em;
  margin-right: 10px;
`;

const SocialBar = styled.div`
  display: flex;
  flex: 1;
`;
