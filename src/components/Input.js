import React from "react";

export default function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
      ></input>
    </div>
  );
}
