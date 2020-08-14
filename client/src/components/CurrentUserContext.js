import React, { useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/me/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const responseJSON = await response.json();
      setCurrentUser(responseJSON);
      setStatus("idle");
    } catch (error) {
      setError("Status 404");
      setStatus("idle");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, error }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
