import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { playlistsFetcher } from "../../utils/axiosTools";
import PlaylistItem from "./PlaylistItem";

function PlaylistsModal({ trackId, onClose }) {
  const [data, setData] = useState();

  useEffect(() => {
    playlistsFetcher.getAll().then((result) => setData(result));
  }, []);

  if (!data) return <div>Loading ...</div>;

  return (
    <div className="flex mx-auto bg-opacity-0">
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="flex flex-col max-w-sm p-6 rounded-lg border border-red-400 bg-white dark:bg-gray dark:text-white dark:border-yellowCustom">
          <div className="flex flex-row justify-between">
            <p className="dark:text-yellowCustom">Add the track to ...</p>
            <span
              aria-hidden="true"
              onClick={onClose}
              className="flex justify-end cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="mt-4 flex">
            {data && (
              <div className="text-center mr-10">
                <ul>
                  {data.map((playlist) => (
                    <PlaylistItem
                      key={playlist.id}
                      id={playlist.id}
                      title={playlist.title}
                      trackId={trackId}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistsModal;

PlaylistsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  trackId: PropTypes.string.isRequired,
};
