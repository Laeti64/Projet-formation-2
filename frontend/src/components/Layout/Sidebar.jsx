/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import FavouriteIcon from "../SVG/Favourite";
import HomeIcon from "../SVG/HomeIcon";
import PlaylistsIcon from "../SVG/PlaylistsIcon";
import ProfileIcon from "../SVG/ProfileIcon";
import GenreIcon from "../SVG/GenreIcon";
import useWindowSize from "../../hooks/useWindowSize";
import { ThemeContext } from "../../Context/ThemeContext";
import UploadsIcon from "../SVG/UploadsIcon";

function CustomNavLink({ path, name, children }) {
  const { theme } = useContext(ThemeContext);

  const activeStyle = {
    light: {
      color: "#f87185",
    },
    dark: {
      color: "#facd66",
    },
  };

  return (
    <NavLink
      className=" w-full flex justify-around align-middle items-center border-gray-400 py-2"
      to={path}
      style={({ isActive }) => (isActive ? activeStyle[theme] : undefined)}
    >
      {children}
      <p className="w-[50%] ">{name}</p>
    </NavLink>
  );
}

export default function Sidebar({ setIsMenu }) {
  const { width } = useWindowSize();

  const handleClick = () => {
    if (width < 768) {
      setIsMenu(false);
    }
  };

  return (
    <div className=" w-270 fixed z-30 px-4  h-screen flex flex-col justify-start align-middle items-center text-black dark:text-white  bg-pinkCustom dark:bg-blackCustom">
      <ul className="w-full pr-6 overflow-y-scroll">
        <li
          onClick={handleClick}
          className="border-b w-full border-gray-400  pt-4 pb-3"
        >
          <CustomNavLink name="Home" path="/">
            <HomeIcon currentPage="/" />
          </CustomNavLink>
        </li>
        <li
          onClick={handleClick}
          className="border-b w-full py-3 border-gray-400"
        >
          <CustomNavLink name="Genres" path="/genres">
            <GenreIcon currentPage="/genres" />
          </CustomNavLink>
        </li>
        <li
          onClick={handleClick}
          className="border-b w-full border-gray-400 py-3"
        >
          <CustomNavLink name="Favourites" path="/favourites">
            <FavouriteIcon currentPage="/favourites" />
          </CustomNavLink>
        </li>
        <li
          onClick={handleClick}
          className="border-b w-full border-gray-400 py-3"
        >
          <CustomNavLink name="Playlists" path="/playlists">
            <PlaylistsIcon currentPage="/playlists" />
          </CustomNavLink>
        </li>
        <li
          onClick={handleClick}
          className="border-b w-full border-gray-400 py-3"
        >
          <CustomNavLink name="Uploads" path="/uploads">
            <UploadsIcon currentPage="/uploads" />
          </CustomNavLink>
        </li>
        <li onClick={handleClick} className=" w-full  pt-3 pb-60">
          <CustomNavLink name="Profile" path="/profile">
            <ProfileIcon currentPage="/profile" />
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}
CustomNavLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
Sidebar.propTypes = {
  setIsMenu: PropTypes.func.isRequired,
};
