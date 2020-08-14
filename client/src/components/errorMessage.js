import React from "react";

function errorMessage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>An unknown error has occured.</h1>
      <h3>
        Please try refreshing the page, or contact support if problem persists
      </h3>
    </div>
  );
}

export default errorMessage;
