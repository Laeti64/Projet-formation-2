/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

const FavouriteIcon = (props) => {
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
        d="M20.387 5.696h-1.2V3.91c0-.995-.815-1.81-1.81-1.81h-5.972c-.996 0-1.811.815-1.811 1.81v1.787h-1.2a2.405 2.405 0 0 0-2.398 2.399v.155c.384-.107.78-.155 1.2-.155h14.39c.42 0 .815.048 1.199.155v-.155c0-1.32-1.08-2.399-2.398-2.399ZM16.705 20.302a.683.683 0 0 0-.684.684c0 .372.312.684.684.684a.691.691 0 0 0 .683-.684.691.691 0 0 0-.683-.684ZM10.877 21.358a.683.683 0 0 0-.684.683c0 .372.312.684.684.684a.691.691 0 0 0 .683-.684c0-.371-.3-.683-.683-.683Z"
        fill={getFillColor()}
      />
      <path
        d="M22.785 10.05a4.387 4.387 0 0 0-1.2-.157H7.196c-.42 0-.815.048-1.199.156-2.063.54-3.598 2.423-3.598 4.641v7.195a4.81 4.81 0 0 0 4.797 4.797h14.39a4.81 4.81 0 0 0 4.797-4.797V14.69c0-2.218-1.535-4.101-3.597-4.64Zm-3.598 5.875v5.061a2.487 2.487 0 0 1-2.482 2.482 2.487 2.487 0 0 1-2.482-2.482 2.487 2.487 0 0 1 2.482-2.482c.24 0 .468.048.683.108V17.1l-4.017 1.09v3.85c0 .012 0 .024-.012.036a2.49 2.49 0 0 1-2.482 2.459 2.49 2.49 0 0 1-2.483-2.495 2.48 2.48 0 0 1 2.483-2.482c.24 0 .467.048.695.108V15.65c0-1.032.648-1.871 1.631-2.135l3.178-.875c1.02-.276 1.667-.012 2.027.263.36.276.78.816.78 1.883v1.14Z"
        fill={getFillColor()}
      />
    </svg>
  );
};

export default FavouriteIcon;

FavouriteIcon.propTypes = {
  currentPage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
