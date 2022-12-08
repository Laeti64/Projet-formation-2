import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TrackList from "../TrackList";
import { genresFetcher, songsFetcher } from "../../utils/axiosTools";
import imagesGenres from "../ImageGenre";

function GenresList({ handleCurrentId }) {
  const [genresList, setGenresList] = useState(null);
  const [currentGenre, setCurrentGenre] = useState("");
  const [tracks, setTracks] = useState(null);

  const location = useLocation();

  const load = () =>
    genresFetcher.getAll().then((result) => {
      setGenresList(result);
      if (location.state) {
        setCurrentGenre(location.state.genre);
      } else {
        setCurrentGenre(result[0].name);
      }
    });

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentGenre) {
      songsFetcher
        .getAllByGenre(currentGenre)
        .then((result) => setTracks(result));
    }
  }, [currentGenre]);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className="m-5 pb-28 align-middle">
      <div className="m-2">
        <span className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-yellowCustom">
          Genres
        </span>
      </div>
      <div className="m-2 grid grid-cols-custom gap-2 justify-items-center">
        {genresList.map((genre, index) => (
          <div
            aria-hidden="true"
            onClick={() => {
              setCurrentGenre(genre.name);
            }}
          >
            <img
              className="w-64 lg:h-40 h-20 cursor-pointer rounded-xl opacity-80 hover:border hover:opacity-100 hover:border-red-400 dark:hover:border-yellowCustom"
              src={imagesGenres[index]}
              alt=""
            />
            <span
              key={genre.id}
              className="mb-2 flex cursor-pointer px-3 rounded-md dark:text-white dark:hover:text-yellowCustom hover:text-red-400  text-black"
            >
              {genre.name}
            </span>
          </div>
        ))}
      </div>
      <div className="m-2 flex justify-center items-center mt-10 ">
        {tracks.length === 0 ? (
          <div>No tracks ...</div>
        ) : (
          <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        )}
      </div>
    </div>
  );
}

export default GenresList;

GenresList.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
