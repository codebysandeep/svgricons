import * as React from "react";
import PropTypes from "prop-types";
function SvgDollar({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      aria-label={title}
      role="img"
      tabindex="-1"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <circle cx={12} cy={12} r={10} stroke="#1C274C" strokeWidth={1.5} />
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 6v12M15 9.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5 3 1.12 3 2.5-1.343 2.5-3 2.5-3-1.12-3-2.5"
      />
    </svg>
  );
}
SvgDollar.propTypes = {
  SvgDollar: PropTypes.string,
};
export default SvgDollar;
