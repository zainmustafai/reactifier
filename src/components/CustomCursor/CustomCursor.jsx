import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Import your custom CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!isMobileDevice()) {
      const handleClick = () => {
        setClicked(true);
      };
      window.addEventListener("mousedown", handleClick);
      window.addEventListener("mouseup", () => setClicked(false));

      window.addEventListener("mousemove", updateCursorPosition);
      return () => {
        window.removeEventListener("mousedown", handleClick);
        window.removeEventListener("mouseup", () => setClicked(false));
        window.removeEventListener("mousemove", updateCursorPosition);
      };
    }
  }, []);

  if (isMobileDevice()) {
    return null; // Return null to not render anything on mobile devices
  }

  return (
    <div
      className={`custom-cursor ${clicked ? "clicked" : ""} `}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className=" bg-black dark:bg-white w-[10px] bg-opacity-100 aspect-square -translate-x-[50%] rounded-full "></div>
    </div>
  );
};

export default CustomCursor;
