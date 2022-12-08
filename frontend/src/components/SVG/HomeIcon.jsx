/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const HomeIcon = (props) => {
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
      width={52}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)">
        <path
          d="M22.693 37.538v-3.68c0-.932.731-1.69 1.638-1.696h3.328c.91 0 1.648.76 1.648 1.696v3.67c0 .809.635 1.466 1.42 1.472h2.271a3.935 3.935 0 0 0 2.83-1.2A4.168 4.168 0 0 0 37 34.894V24.439c0-.881-.38-1.717-1.037-2.283L28.25 15.81a3.51 3.51 0 0 0-4.583.086l-7.547 6.261A3.006 3.006 0 0 0 15 24.44v10.443C15 37.156 16.792 39 19.002 39h2.219a1.4 1.4 0 0 0 1.01-.424c.27-.275.42-.648.42-1.038h.042Z"
          fill={getFillColor()}
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0.61}
          y={0.61}
          width={50.781}
          height={52.781}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={7.195} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.803921 0 0 0 0 0.4 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_336_835"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_336_835"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HomeIcon;

HomeIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
