/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

const GenreIcon = (props) => {
  const { pathname } = useLocation();
  const { currentPage } = props;
  const { theme } = useContext(ThemeContext);

  const getFillColor = () => {
    if (theme === "dark") {
      return currentPage === pathname ? "#facd66" : "white";
    }
    return currentPage === pathname ? "red" : "black";
  };
  return (
    <svg
      width={29}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.294 2.398v3.598h-.9c-.312 0-.611.012-.9.06V2.398c0-.491.409-.899.9-.899.492 0 .9.408.9.9Z"
        fill={getFillColor()}
      />
      <path
        d="M20.386 5.996H8.394c-.311 0-.611.012-.899.06-3.094.36-5.097 2.65-5.097 5.936v8.394c0 3.598 2.399 5.996 5.996 5.996h11.992c3.598 0 5.997-2.398 5.997-5.996v-8.394c0-3.598-2.399-5.996-5.997-5.996ZM9.45 19.187a3 3 0 0 1 0-5.996 3 3 0 0 1 0 5.996Zm7.794.3h-.6a.906.906 0 0 1-.898-.9c0-.491.407-.899.899-.899h.6c.491 0 .899.408.899.9 0 .491-.408.899-.9.899Zm4.198 0h-.6a.906.906 0 0 1-.9-.9c0-.491.409-.899.9-.899h.6c.491 0 .9.408.9.9 0 .491-.409.899-.9.899Zm0-4.797h-4.797a.906.906 0 0 1-.9-.9c0-.49.408-.899.9-.899h4.797c.491 0 .9.408.9.9 0 .492-.409.9-.9.9Z"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default GenreIcon;

GenreIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
