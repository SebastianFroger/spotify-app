import React, { useState } from "react";
import Date from "./Date";

export default function SearchPanel() {
  const onDateChange = (date) => {
    console.log("onDateChange " + date);
  };

  return (
    <div>
      <p>Search releases since</p>
      <Date onChange={onDateChange}></Date>
    </div>
  );
}
