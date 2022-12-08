import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { songsFetcher } from "../../utils/axiosTools";
import TrackList from "../TrackList";

function GenresItem({ handleCurrentId }) {
  const { name } = useParams();
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    songsFetcher.getAllByGenre(name).then((result) => setTracks(result));
  }, []);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="w-full">
      {tracks.length === 0 ? (
        <div>No tracks ...</div>
      ) : (
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
      )}
    </div>
  );
}

export default GenresItem;

GenresItem.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
