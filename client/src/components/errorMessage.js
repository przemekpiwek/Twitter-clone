import React from "react";
import { Icon } from "react-icons-kit";
import { u1F4A3 } from "react-icons-kit/noto_emoji_regular/u1F4A3";

function ErrorMessage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon icon={u1F4A3} />
      <h1>
        An unknown error has occured. <br />
      </h1>
      <h3>
        Please try refreshing the page, or contact support if problem persists
      </h3>
    </div>
  );
}

export default ErrorMessage;
