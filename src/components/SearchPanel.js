import React, { useState } from "react";
import Input from "./Input";
import Date from "./Date";

// return an object of settings to use in the search
export default function SearchPanel() {
  const onDateChange = (date) => {
    console.log("onDateChange " + date);
  };

  return (
    <div>
      <Date label="Since" onChange={onDateChange}></Date>
    </div>
  );
}
