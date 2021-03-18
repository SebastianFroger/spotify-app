import React, { useState, useEffect } from "react";

export default function LoadingIcon() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 45);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  let style = {
    transform: `rotate(${rotation}deg)`,
  };

  //   Array.from(Array)
  return (
    <div style={style} className="loading-container">
      <div className="dot-container" style={{ transform: "rotate(315deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 1)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(270deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.875)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(225deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.750)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(180deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.625)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(135deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.5)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(90deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.375)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(45deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.250)" }}></div>
      </div>
      <div className="dot-container" style={{ transform: "rotate(0deg)" }}>
        <div style={{ backgroundColor: "rgba(var(--dot-color), 0.125)" }}></div>
      </div>
    </div>
  );
}
