import React from "react";
import ToggleButton from "./ToggleButton";

export default function AlbumsListOptions(props) {
  const { lastVisitDate, showAlbums, showSingles, selectAll } = props.options;

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
    <div className="options-container content">
      <select
        onChange={onDateChange}
        className="drop-down"
        name="dateSelection"
      >
        <option value="last">Since {lastVisitDate}</option>
        <option value="2week">Last 2 weeks</option>
        <option value="1month">Last 1 month</option>
        <option value="3month">Last 3 month</option>
        <option value="6month">Last 6 month</option>
        <option value="12month">Last year</option>
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
