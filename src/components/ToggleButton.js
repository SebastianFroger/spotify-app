import { React } from "react";

export default function ToggleButton(props) {
  const { title, enabled, handleClick } = props;

  return (
    <button
      className={`button ${enabled ? "active-btn" : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
