import React from "react";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";

// lift search result here and pass it on to listview

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <SearchPanel></SearchPanel>
      <AlbumsListOptions></AlbumsListOptions>
      <AlbumsList></AlbumsList>
    </div>
  );
};

export default Dashboard;
