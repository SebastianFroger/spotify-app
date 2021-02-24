import React, { Component } from "react";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <SearchPanel></SearchPanel>
        <AlbumsListOptions></AlbumsListOptions>
        <AlbumsList></AlbumsList>
      </div>
    );
  }
}

export default App;
