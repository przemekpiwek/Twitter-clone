import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route path="/profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
