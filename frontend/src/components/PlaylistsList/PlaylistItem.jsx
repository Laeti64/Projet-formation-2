import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistItem({ id, title, trackId }) {
  const [assigned, setAssigned] = useState(false);

  const assignTrack = () => {
    playlistsFetcher
      .assignTrack(id, { songIds: [trackId] })
      .then(() => toast.success(`All good, track added to playlist ${title}`))
      .catch((error) => {
        toast.error("Oupssss");
        console.error(error);
      });
    setAssigned(true);
  };

  return (
    <div className="flex items-center mb-2">
      <div className="w-1/2 flex items-start">
        <li key={id}>{title}</li>
      </div>
      <div className="w-1/2">
        <button
          className="ml-20"
          type="button"
          label="Add"
          onClick={assignTrack}
        >
          {assigned ? `🗸` : "Add"}
        </button>
      </div>
    </div>
  );
}

export default PlaylistItem;

PlaylistItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};
