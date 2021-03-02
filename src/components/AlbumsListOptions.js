import React from "react";
import ToggleButton from "./ToggleButton";

export default function AlbumsListOptions(props) {
  const { showAlbums, showSingles, selectAll } = props.options;

  const onAlbumsChange = () => {
    props.callback({ ...props.options, showAlbums: !showAlbums });
  };

  const onSinglesChange = () => {
    props.callback({ ...props.options, showSingles: !showSingles });
  };

  const onSelectAllChange = () => {
    props.callback({ ...props.options, selectAll: !selectAll });
  };

  const onSave = () => {
    console.log("onSave");
  };

  return (
    <div className="options-container content">
      <select className="drop-down" name="dateSelection">
        <option value="last">Since last visit</option>
        <option value="week">Releases last week</option>
        <option value="month">Releases last month</option>
        <option value="quarter">Releases last 3 month</option>
        <option value="half">Releases last 6 month</option>
        <option value="year">Releases last year</option>
      </select>
      <ToggleButton
        title={"Albums"}
        enabled={showAlbums}
        handleClick={onAlbumsChange}
      />
      <ToggleButton
        title={"Singles"}
        enabled={showSingles}
        handleClick={onSinglesChange}
      />
      <ToggleButton
        title={"Select All"}
        enabled={selectAll}
        handleClick={onSelectAllChange}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
}
