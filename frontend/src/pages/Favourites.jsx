import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import favImg from "../assets/Lead-image.png";
import favBg from "../assets/Favorite_bg.png";
import storage from "../utils/localStorageTools";
import FavouritesList from "../components/FavouritesList";

function Favourites({ handleCurrentId }) {
  const [favourites, setFavourites] = useState(() => storage.get("favorite"));
  useEffect(() => {
    setFavourites(storage.get("favorite"));
  }, [favourites]);
  return (
    <div className="bg-pinkCustom dark:bg-blackCustom w-full h-screen text-black dark:text-white">
      <div className="flex relative lg:h-3/6 h-1/5 overflow-hidden">
        <div className="lg:h-1/3 h-1/5">
          <img
            className="opacity-25 absolute w-screen "
            src={favBg}
            alt="favorite background"
          />
        </div>
        <img
          className="h-full w-1/3 ml-5 py-3 z-20"
          src={favImg}
          alt="favorite theme"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="lg:text-5xl font-bold mt-10 lg:ml-20 ml-4 font-mono">
              Favourites
            </h1>
          </div>

          <div className="flex justify-center ">
            <p className="pb-14 flex justify-center items-center font-medium">
              <img
                className="w-10 h-10 mr-5"
                src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg"
                alt="coeur"
              />
              {favourites.length} favourites songs
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 pb-24">
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
    </div>
  );
}
export default Favourites;

Favourites.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
