/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";

function PlaySvg(props) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="px-5">
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width={14}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.907 8 1.75 2.108v11.784L11.907 8Zm1.386-1.218a1.403 1.403 0 0 1 0 2.436L2.158 15.679C1.248 16.207 0 15.604 0 14.461V1.539C0 .396 1.248-.208 2.158.321l11.135 6.461Z"
          fill={!hover ? "#FACD66" : "#808080"}
        />
      </svg>
    </div>
  );
}

export default PlaySvg;
