import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TrackList from "../components/TrackList";
import RecentlyPlayed from "../components/RecentlyPlayed";
import { songsFetcher } from "../utils/axiosTools";
import musicHome from "../assets/music-home.jpg";
import WaveImg from "../assets/waveImg";
import FavouritesList from "../components/FavouritesList";
import imagesGenres from "../components/ImageGenre";

function Home({ handleCurrentId }) {
  const [tracks, setTracks] = useState([]);
  const bestGenres = ["Alternative", "Blues", "Chill Out"];
  const [showTracks, setShowTracks] = useState(false);

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      if (showTracks) {
        setTracks(res);
      } else {
        setTracks(res.slice(0, 8));
      }
    });
  }, [showTracks]);

  if (!tracks) return <div>Loading ...</div>;

  return (
    <div className=" mb-32 lex flex-col bg-pinkCustom dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div className="mx-10 first-letter:lg:mx-32 relative">
        <img
          className="lg:h-72 h-44 w-full rounded-2xl absolute "
          src={musicHome}
          alt="fond page d'accueil"
        />
        <div className="abosolute overflow-hidden z-30 opacity-60">
          <WaveImg />
        </div>
      </div>
      <div className="m-5">
        <h2 className="mx-5px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Best Genres
        </h2>
        <div className="flex ">
          {bestGenres.map((genre, index) => (
            <Link key={genre} to="/genres" state={{ genre }}>
              <img
                className="w-48 mr-5 cursor-pointer rounded-xl opacity-80 hover:border hover:opacity-100 hover:border-red-400 dark:hover:border-yellowCustom"
                src={imagesGenres[index]}
                alt="genre"
              />{" "}
              {genre}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-5">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Favorites
        </h2>
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
      <div className="mx-5 py-14">
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>

      <div className="mx-5">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          All songs
        </h2>
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        <div className="pb-24">
          <button
            className=" w-full flex p-2 bg-grayCustom justify-center
      opacity-90 rounded-md  text-white
      items-center flex-row align-middle mb-4"
            type="button"
            onClick={() => setShowTracks(!showTracks)}
          >
            {showTracks ? "Show less ..." : "Show all ..."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
