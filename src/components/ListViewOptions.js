import React from "react";
import Input from "./Input";

export default function SearchPanel() {
  const onAlbumsChange = (checked) => {
    console.log("onAlbumsChange " + checked);
  };

  const onSinglesChange = (checked) => {
    console.log("onSinglesChange " + checked);
  };

  const onSelectChange = () => {
    console.log("onSelectAll");
  };

  const onSave = () => {
    console.log("onSave");
  };

  return (
    <div className="options-container">
      <div className="options">
        <button onClick={onAlbumsChange}>Albums</button>
        <button onClick={onSinglesChange}>Singles</button>
      </div>
      <div className="options">
        <button onClick={onSelectChange}>None</button>
        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
}
