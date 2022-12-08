/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

const PlaylistsIcon = (props) => {
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
      width={23}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.183 4.17v13.257a.204.204 0 0 1-.262.194 4.974 4.974 0 0 0-1.37-.191C2.036 17.43 0 19.275 0 21.552c0 2.276 2.037 4.121 4.55 4.121 1.728 0 3.455-.938 4.173-2.54.624-1.39.378-3.062.378-4.554V7.796a.338.338 0 0 1 .262-.33l9.647-2.24a.34.34 0 0 1 .417.33v10.857a.203.203 0 0 1-.168.2.204.204 0 0 1-.094-.005 4.973 4.973 0 0 0-1.37-.192c-2.514 0-4.551 1.846-4.551 4.122s2.037 4.122 4.55 4.122c1.52 0 3.033-.788 3.886-2.076.826-1.248.665-2.559.664-3.97v-17.6a1.017 1.017 0 0 0-1.234-.99L7.096 3.043a1.153 1.153 0 0 0-.913 1.125Z"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default PlaylistsIcon;

PlaylistsIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
