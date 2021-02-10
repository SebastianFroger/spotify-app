import React, { useState } from "react";
import Input from "./Input";
import Date from "./Date";

// return an object of settings to use in the search
export default function SearchPanel() {
  const onDateChange = (date) => {
    console.log("onDateChange " + date);
  };

  const onAlbumsChange = (checked) => {
    console.log("onAlbumsChange " + checked);
  };

  const onSinglesChange = (checked) => {
    console.log("onSinglesChange " + checked);
  };

  const onSelectAll = () => {
    console.log("onSelectAll");
  };

  const onSelectNone = () => {
    console.log("onSelectNone");
  };

  const onSave = () => {
    console.log("onSave");
  };

  return (
    <div>
      <Input label="Albums" type="checkbox" onChange={onAlbumsChange}></Input>
      <Input label="Singles" type="checkbox" onChange={onSinglesChange}></Input>
      <Date label="Since" onChange={onDateChange}></Date>
      <button onClick={onSelectAll}>Select All</button>
      <button onClick={onSelectNone}>Select None</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
