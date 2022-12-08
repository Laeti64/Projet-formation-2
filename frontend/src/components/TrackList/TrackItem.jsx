import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import RighClickMenu from "../RighClickMenu";
import PlaySvg from "../Player/Play";
import storage from "../../utils/localStorageTools";
import logo from "../../assets/logo.png";

function TrackItem({
  id,
  title,
  duration,
  artist,
  picture,
  handleCurrentId,
  onPlaylist,
  loadPlayer,
  onUploadPicture,
  albumId,
  reloadTrackList,
}) {
  const roundedTime = (time) => {
    const result = [];
    const splitedTime = time.split(":");
    result.push(
      splitedTime[0],
      Math.round(+splitedTime[1] - 1)
        .toString()
        .padStart(2, "0")
    );
    return result.join(":");
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleContextMenu = (e) => {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);
    setShowMenu(true);
  };

  const handleClick = () => {
    if (showMenu) setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    if (storage.get("favorite") && storage.get("favorite").includes(id))
      setIsFavorite(true);
  }, [id]);

  const handleClickFavorite = () => {
    if (isFavorite) {
      storage.remove("favorite", id);
    } else {
      storage.set("favorite", id);
    }

    setIsFavorite((state) => !state);
  };

  const playlistHandler = (trackId) => {
    onPlaylist(trackId);
  };

  const uploadPicture = (album) => {
    onUploadPicture(album);
  };

  return (
    <div
      onContextMenu={(event) => handleContextMenu(event)}
      className="flex p-2 bg-grayCustom
      opacity-90 rounded-md my-1 text-white
      items-center flex-row align-middle"
    >
      <div className="w-1/6">
        <img
          className="w-10 h-10"
          src={`${picture === null ? logo : picture}`}
          alt=""
        />
      </div>
      <h2 className="text-sm mx-7 flex-grow w-1/2 truncate">
        {title} - {artist}
      </h2>
      <div className="sm:flex flex-col-reverse md:flex md:flex-row">
        <div className="md:mx-7 md:flex-grow">
          <p>{roundedTime(duration)}</p>
        </div>
        <div className="flex justify-between flex-grow w-2/7">
          <div
            className={` w-7 h-7 bg-no-repeat hover:scale-125 ${
              isFavorite
                ? "bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg')] bg-[size:90%]"
                : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg')] bg-[size:110%]"
            }`}
            onClick={handleClickFavorite}
            role="button"
            tabIndex={0}
            label="favorite"
            aria-hidden="true"
          />
          <span
            className="cursor-pointer hidden mx-1 hover:scale-125 md:block text-lg"
            aria-hidden="true"
            onClick={() => uploadPicture(albumId)}
          >
            +
          </span>

          <span
            className="cursor-pointer mx-1 hover:scale-125 "
            aria-hidden="true"
            onClick={() => playlistHandler(id)}
          >
            ...
          </span>
          <button
            className="hover:scale-125"
            type="button"
            onClick={() => {
              loadPlayer();
              handleCurrentId({ id });
            }}
          >
            <PlaySvg color="white" />
          </button>
        </div>
      </div>
      {location.pathname === "/uploads" && (
        <RighClickMenu
          x={x}
          y={y}
          showMenu={showMenu}
          id={id}
          reloadTrackList={reloadTrackList}
        />
      )}
    </div>
  );
}

export default TrackItem;

TrackItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  albumId: PropTypes.string.isRequired,
  handleCurrentId: PropTypes.func.isRequired,
  onPlaylist: PropTypes.func.isRequired,
  loadPlayer: PropTypes.func.isRequired,
  onUploadPicture: PropTypes.func.isRequired,
  reloadTrackList: PropTypes.func.isRequired,
};
