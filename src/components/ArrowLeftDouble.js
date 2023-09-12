import * as React from "react";
function SvgArrowLeftDouble({ title, titleId, ...props }) {
  if (title === undefined) {
    const getTitle = "SvgArrowLeftDouble".slice(3);
    title = getTitle;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="m16.6 31.5 2.2-2.2L5.5 16 18.8 2.7 16.6.5 1.2 16l15.4 15.5z" />
      <path d="m28.7 31.5 2.2-2.2L17.5 16 30.8 2.7 28.6.5 13.2 16l15.5 15.5z" />
    </svg>
  );
}
export default SvgArrowLeftDouble;
