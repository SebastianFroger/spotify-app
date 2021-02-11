import React from "react";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import ListViewOptions from "./ListViewOptions";
import ListView from "./ListView";

// lift search result here and pass it on to listview

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <SearchPanel></SearchPanel>
      <ListViewOptions></ListViewOptions>
      <ListView></ListView>
    </div>
  );
};

export default Dashboard;
