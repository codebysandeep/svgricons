import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    role="img"
    aria-label={title}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16 1.644C8.069 1.644 1.644 8.069 1.644 16S8.069 30.356 16 30.356 30.356 23.931 30.356 16 23.931 1.644 16 1.644zm-1.725 4.95h3.419v3.1h-3.419v-3.1zm3.475 18.819h-3.5v-12.15h3.5v12.15z" />
  </svg>
);
export default SvgInfo;
