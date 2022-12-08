/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ProfileIcon = (props) => {
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
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3899 2.39832C11.2481 2.39832 8.69385 4.95254 8.69385 8.09436C8.69385 11.1762 11.1042 13.6705 14.246 13.7784C14.3419 13.7664 14.4379 13.7664 14.5098 13.7784C14.5338 13.7784 14.5458 13.7784 14.5698 13.7784C14.5818 13.7784 14.5818 13.7784 14.5937 13.7784C17.6636 13.6705 20.0739 11.1762 20.0859 8.09436C20.0859 4.95254 17.5317 2.39832 14.3899 2.39832Z"
        fill={getFillColor()}
      />
      <path
        d="M20.4819 16.9682C17.1362 14.7377 11.68 14.7377 8.31036 16.9682C6.78741 17.9875 5.948 19.3665 5.948 20.8415C5.948 22.3165 6.78741 23.6835 8.29836 24.6908C9.9772 25.818 12.1837 26.3816 14.3901 26.3816C16.5966 26.3816 18.8031 25.818 20.4819 24.6908C21.9928 23.6715 22.8323 22.3045 22.8323 20.8175C22.8203 19.3425 21.9928 17.9755 20.4819 16.9682Z"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default ProfileIcon;

ProfileIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
