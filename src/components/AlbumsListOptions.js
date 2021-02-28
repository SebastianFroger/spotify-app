import { React, useState } from "react";
import ToggleButton from "./ToggleButton";

export default function AlbumsListOptions() {
  const [albums, setAlbums] = useState(true);
  const [singles, setSingles] = useState(false);

  const onAlbumsChange = () => {
    setAlbums(!albums);
  };

  const onSinglesChange = () => {
    setSingles(!singles);
  };

  const onSelectChange = () => {
    console.log("onSelectAll");
  };

  const onSave = () => {
    console.log("onSave");
  };

  return (
    <div className="options-container content">
      <select className="drop-down" name="time">
        <option value="last">Releases since last visit</option>
        <option value="week">Releases last week</option>
        <option value="month">Releases last month</option>
        <option value="quarter">Releases last 3 month</option>
        <option value="half">Releases last 6 month</option>
        <option value="year">Releases last year</option>
      </select>
      <ToggleButton
        title={"Albums"}
        enabled={albums}
        handleClick={onAlbumsChange}
      />
      <ToggleButton
        title={"Singles"}
        enabled={singles}
        handleClick={onSinglesChange}
      />
      <button onClick={onSelectChange}>Select All</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
