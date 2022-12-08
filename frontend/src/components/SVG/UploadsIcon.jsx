/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

const UploadsIcon = (props) => {
  const { pathname } = useLocation();
  const { currentPage } = props;
  const { theme } = useContext(ThemeContext);

  const getFillColor = () => {
    if (theme === "dark") {
      return currentPage === pathname ? "yellow" : "white";
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
        d="M13.491 9.426H2.398v9.99c0 .071 0 .143.012.203h11.081V9.426ZM9.222 7.627h4.27V2.398H9.257v5.085c0 .048-.024.096-.036.144ZM7.459 7.483V2.59c-2.662.552-4.401 2.327-4.905 5.037h4.929a.602.602 0 0 1-.024-.144ZM19.451 2.398H15.29v5.229h4.161V2.398ZM21.238 7.627h4.989c-.504-2.734-2.267-4.521-4.977-5.049v5.013c0 .012-.012.024-.012.036ZM21.25 26.203c2.626-.516 4.353-2.195 4.916-4.785H21.25v4.785ZM19.451 21.418H15.29v4.964h4.161v-4.964ZM15.29 19.619h11.08c.012-.06.012-.132.012-.204v-9.99H15.29V19.62ZM13.491 21.418H9.258v4.964h4.233v-4.964ZM2.614 21.418c.564 2.566 2.267 4.245 4.845 4.773v-4.773H2.614Z"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default UploadsIcon;

UploadsIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
