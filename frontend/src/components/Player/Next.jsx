import * as React from "react";

function NextSvg() {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="px-5">
      <svg
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        width={28}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.125 0A.875.875 0 0 1 28 .875v14a.875.875 0 1 1-1.75 0V9.191l-10.967 6.363c-.91.528-2.158-.075-2.158-1.218V9.191L2.158 15.554C1.248 16.082 0 15.479 0 14.336V1.414C0 .271 1.248-.332 2.158.196l10.967 6.363V1.414c0-1.143 1.248-1.746 2.158-1.218L26.25 6.559V.875A.875.875 0 0 1 27.125 0ZM1.75 1.983v11.784l10.157-5.892L1.75 1.983Zm13.125 0v11.784l10.157-5.892-10.157-5.892Z"
          fill={!hover ? "#FACD66" : "#808080"}
        />
      </svg>
    </div>
  );
}

export default NextSvg;
