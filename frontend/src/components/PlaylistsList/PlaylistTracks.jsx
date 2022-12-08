import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { playlistsFetcher } from "../../utils/axiosTools";
import TrackList from "../TrackList";

function PlaylistTracks({ handleCurrentId }) {
  const [tracks, setTracks] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    playlistsFetcher.getTracks(id).then((result) => setTracks(result.songs));
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="w-full">
      <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
    </div>
  );
}

export default PlaylistTracks;

PlaylistTracks.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
