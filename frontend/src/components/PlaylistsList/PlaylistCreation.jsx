import PropTypes from "prop-types";
import { toast } from "react-toastify";
import React, { useRef } from "react";
import { playlistsFetcher } from "../../utils/axiosTools";

function PlaylistCreation({ reload }) {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const createPlaylist = (e) => {
    e.preventDefault();
    playlistsFetcher
      .create({
        title: inputTitle.current.value,
        description: inputDescription.current.value,
        picture: "toto",
      })
      .then(() =>
        toast.success(`All good, playlist ${inputTitle.current.value} created.`)
      )
      .then(() => {
        inputTitle.current.value = "";
        inputDescription.current.value = "";
        reload();
      });
  };

  return (
    <div className="flex flex-col h-52 bg-F3E8F3 flex-start align-item">
      <div className="flex lg:flex-row flex-col mb-2">
        <div className="w-full md:w-1/2 lg:mr-2">
          <label
            htmlFor="title text-black font-bold py-2"
            className="py-1 px-3 mb-3"
          >
            Title
          </label>
          <input
            className="text-gray-700 w-full shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3"
            ref={inputTitle}
            id="title"
            type="text"
            placeholder="Title..."
          />
        </div>
        <div className="w-full md:w-1/2">
          <label
            htmlFor="title text-black font-bold py-2"
            className="py-1 px-3 mb-3"
          >
            Description
          </label>
          <input
            className="text-gray-700 w-full shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3"
            ref={inputDescription}
            id="description"
            type="text"
            placeholder="Description..."
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <button
            className="text-grey-500 bg-white mr-5 mt-5 py-2 px-6 rounded-lg border-0 border-black text-sm font-medium dark:bg-yellowCustom dark:text-black hover:text-red-400"
            type="button"
            label="Create"
            onClick={createPlaylist}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCreation;

PlaylistCreation.propTypes = {
  reload: PropTypes.func.isRequired,
};
