import React from "react";

export default function SearchPanel() {
  const onDateChange = (date) => {
    console.log("onDateChange " + date);
  };

  return (
    <div className="search-panel">
      <p>Search releases since</p>
      <input type="date" onChange={onDateChange}></input>
    </div>
  );
}
