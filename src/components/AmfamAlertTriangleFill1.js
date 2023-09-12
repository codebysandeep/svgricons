import * as React from "react";
function SvgAmfamAlertTriangleFill1({ title, titleId, ...props }) {
  if (title === undefined) {
    const getTitle = "SvgAmfamAlertTriangleFill1".slice(3);
    title = getTitle;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 29 25"
      role="img"
      aria-label={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#231F20"
        d="m28.546 21.285-11.8-20.24a2.37 2.37 0 0 0-3.93 0l-11.8 20.24c-.73 1.25.33 2.72 2 2.72h23.57c1.63 0 2.69-1.47 1.96-2.72Zm-12.41.32h-2.66v-3.27h2.71l-.05 3.27Zm.21-10.62-1.07 3.94h-.92l-1.14-4v-6.1h3.13v6.16Z"
      />
    </svg>
  );
}
export default SvgAmfamAlertTriangleFill1;
