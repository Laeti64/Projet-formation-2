import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { songsFetcher } from "../utils/axiosTools";
import storage from "../utils/localStorageTools";
import TrackList from "./TrackList";

function RecentlyPlayed({ handleCurrentId }) {
  const [tracks, setTracks] = useState([]);
  const recentlyplayed = storage.get("recentlyPlayed");

  useEffect(() => {
    songsFetcher
      .getAll()
      .then((result) =>
        setTracks(result.filter((track) => recentlyplayed.includes(track.id)))
      );
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div>
      {recentlyplayed && (
        <div>
          <span className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
            Tracks recently played
          </span>
          <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        </div>
      )}
    </div>
  );
}
export default RecentlyPlayed;

RecentlyPlayed.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
