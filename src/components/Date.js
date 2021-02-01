import React from "react";

export default function Date(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="date"
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </div>
  );
}
