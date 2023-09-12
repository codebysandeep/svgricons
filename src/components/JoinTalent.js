import * as React from "react";
function SvgJoinTalent({ title, titleId, ...props }) {
  if (title === undefined) {
    const getTitle = "SvgJoinTalent".slice(3);
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
      <path d="M21.669 17.7a18.213 18.213 0 0 0-3.194-1.206.496.496 0 0 1-.206-.863 5.961 5.961 0 0 0 2.025-5.675c-.438-2.406-2.413-4.381-4.819-4.806a6.024 6.024 0 0 0-7.119 5.919c0 1.838.831 3.469 2.131 4.569.313.262.188.75-.213.856-2.894.781-5.338 1.956-6.95 3.525l-.731.563h16.931a5.386 5.386 0 0 1 2.144-2.881zm2.981-.256c-2.625 0-4.756 2.131-4.756 4.756s2.131 4.756 4.756 4.756 4.756-2.131 4.756-4.756a4.754 4.754 0 0 0-4.756-4.756zm3.038 5.112h-2.681v2.681h-.719v-2.681h-2.681v-.719h2.681v-2.681h.719v2.681h2.681v.719z" />
    </svg>
  );
}
export default SvgJoinTalent;
