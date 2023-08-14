import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Import your custom CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleClick = () => {
      setClicked(true);
    };
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mouseup", () => setClicked(false));
    window.addEventListener
    
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicked ? "clicked" : ""} `}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
