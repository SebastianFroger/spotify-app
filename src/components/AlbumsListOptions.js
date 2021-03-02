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
    props.callback({ ...props.options, showAlbums: !showAlbums });
  };

  const onSinglesChange = () => {
    props.callback({ ...props.options, showSingles: !showSingles });
  };

  const onSelectAllChange = () => {
    props.callback({ ...props.options, selectAll: !selectAll });
  };

  const onDateChange = (e) => {
    props.callback({ ...props.options, searchDate: e.target.value });
  };

  const onSave = () => {
    console.log("onSave");
  };

  return (
    <div className="options-container">
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
