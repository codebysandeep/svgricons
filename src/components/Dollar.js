import * as React from "react";
function SvgDollar({ title, titleId, ...props }) {
  if (title === undefined) {
    const getTitle = "SvgDollar".slice(3);
    title = getTitle;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
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
export default SvgDollar;
