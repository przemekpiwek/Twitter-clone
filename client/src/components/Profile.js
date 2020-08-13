import React from "react";
import ProfileTweetFeed from "./ProfileTweetFeed";
import Sidebar from "./Sidebar";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Profile = ({ currentUser, status }) => {
  const [tab, setTab] = React.useState("Tweets");
  const [fetchedProfile, setFetchedProfile] = React.useState([]);
  const [isProfileFetched, setIsProfileFetched] = React.useState(false);

  let { profileId } = useParams();

  React.useEffect(() => {
    const fetchProfile = async (profile) => {
      const response = await fetch(`/api/${profile}/profile`, {
        method: "get",
      });
      const JSONdata = await response.json();
      setFetchedProfile(JSONdata.profile);
      setIsProfileFetched(true);
    };
    fetchProfile(profileId);
  }, [isProfileFetched]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            maxWidth: "800px",
            borderRight: "1px solid rgb(230, 236, 240)",
          }}
        >
          {isProfileFetched && (
            <>
              <ProfileHeader currentUser={fetchedProfile} status={status} />
              <ProfileTweetFeed currentUser={fetchedProfile} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
