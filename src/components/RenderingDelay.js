import React, { useEffect, useState } from "react";

const RenderingDelay = (props) => {
  const { text = "", delay = 0 } = props;
  const [renderText, setRenderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setRenderText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevCount) => prevCount + 1);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [text, currentIndex, delay]);

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "18px",
        width: "220px",
      }}
    >
      {renderText}
    </span>
  );
};
export default RenderingDelay;
