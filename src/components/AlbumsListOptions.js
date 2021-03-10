import React from "react";
import ToggleButton from "./ToggleButton";

export default function AlbumsListOptions(props) {
  const {
    todayDate,
    searchDate,
    showAlbums,
    showSingles,
    selectAll,
  } = props.options;

  const onAlbumsChange = () => {
    props.callback({ showAlbums: !showAlbums });
  };

  const onSinglesChange = () => {
    props.callback({ showSingles: !showSingles });
  };

  const onSelectAllChange = () => {
    props.callback({ selectAll: !selectAll });
  };

  const onDateChange = (e) => {
    props.callback({ searchDate: e.target.value });
  };

  const onSave = () => {
    props.onSave();
  };

  return (
    <div className="options-container content">
      <input
        onChange={onDateChange}
        type="date"
        value={searchDate}
        max={todayDate}
      ></input>
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
