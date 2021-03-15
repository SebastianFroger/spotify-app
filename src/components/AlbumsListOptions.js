import React from "react";
import ToggleButton from "./ToggleButton";

export default function AlbumsListOptions(props) {
  const options = props.options;

  const onAlbumsChange = () => {
    options.showAlbums = !options.showAlbums;
    props.callback(options);
  };

  const onSinglesChange = () => {
    options.showSingles = !options.showSingles;
    props.callback(options);
  };

  const onSelectAllChange = () => {
    options.selectAll = !options.selectAll;
    props.callback(options);
  };

  const onDateChange = (e) => {
    if (e.target.value === options.searchDate) return;
    options.searchDate = e.target.value;
    props.callback(options);
  };

  const onSave = () => {
    props.onSave();
  };

  return (
    <div className="options-container content">
      <input
        change={onDateChange}
        type="date"
        value={options.searchDate}
        max={options.todayDate}
      ></input>
      <ToggleButton
        title={"Albums"}
        enabled={options.showAlbums}
        handleClick={onAlbumsChange}
      />
      <ToggleButton
        title={"Singles"}
        enabled={options.showSingles}
        handleClick={onSinglesChange}
      />
      <ToggleButton
        title={options.selectAll ? "None" : "All"}
        enabled={options.selectAll}
        handleClick={onSelectAllChange}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
}
