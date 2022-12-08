import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { genresFetcher } from "../../utils/axiosTools";

function GenresList({ showGenres, setShowGenres }) {
  const [genres, setGenres] = useState(null);
  const location = useLocation();

  useEffect(() => {
    genresFetcher.getAll().then((result) => setGenres(result));
  }, [showGenres]);

  useEffect(() => {
    if (location.pathname === "/genres") {
      setShowGenres(true);
    }
  }, []);

  if (!genres) return <div>Loading ...</div>;

  return (
    <div className="h-full w-full mb-10">
      <div className="flex flex-wrap">
        {showGenres ? (
          genres.map((genre) => (
            <Link
              key={genre.id}
              className=" flex justify-center  items-center h-20 w-40 bg-gradient-to-l from-gray via-gray-500 to-gray opacity-90 rounded-md my-1 text-white text-center p-1 m-1 hover:scale-125 "
              to={`/genres/${genre.name}`}
            >
              {genre.name}
            </Link>
          ))
        ) : (
          <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-1">
            {genres.slice(0, 3).map((genre) => (
              <div>
                <Link
                  key={genre.id}
                  className=" flex justify-center  items-center lg:h-28 md:h-16 h-7  bg-gradient-to-l from-gray via-gray-500 to-gray opacity-90 rounded-md my-1 text-white text-center p-1 m-1 hover:scale-125 "
                  to={`/genres/${genre.name}`}
                >
                  {genre.name}
                </Link>
              </div>
            ))}
            <button
              type="button"
              className=" lg:h-28 md:h-16 h-7  bg-gradient-to-l from-gray via-gray-500 to-gray opacity-90 rounded-md my-1 text-white items-center text-center p-1 m-1 hover:scale-125 "
            >
              <Link to="/genres">See all...</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenresList;

GenresList.propTypes = {
  setShowGenres: PropTypes.func.isRequired,
  showGenres: PropTypes.bool.isRequired,
};
