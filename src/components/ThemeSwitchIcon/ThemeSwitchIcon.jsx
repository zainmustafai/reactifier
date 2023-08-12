import React from "react";

const ThemeSwitchIcon = ({ isDark, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className={`w-6 h-6 ${
        isDark ? "text-white" : "dark:text-black"
      } transition-all duration-300 ease-linear `}
      {...props}
    >
      <path
        fill={isDark ? "#000" : "#fff"}
        d="M40 18.8V10h-8.8L25 3.7 18.8 10H10v8.8L3.7 25l6.2 6.2V40h8.8l6.2 6.2 6.2-6.2H40v-8.8l6.2-6.2-6.2-6.2zM25 36.6c-1.7 0-3.4-.4-4.8-1 4-1.9 6.7-5.9 6.7-10.5 0-4.7-2.8-8.7-6.7-10.5 1.5-.7 3.1-1 4.8-1 6.4 0 11.6 5.2 11.6 11.6 0 6.2-5.2 11.4-11.6 11.4z"
      />
    </svg>
  );
};

export default ThemeSwitchIcon;
