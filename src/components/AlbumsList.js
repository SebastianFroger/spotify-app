import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import ListViewOptions from "./ListViewOptions";

export default function AlbumsList() {
  const [albums, setAlbums] = useState({ albums: "No albums found" });

  return (
    <div className="albums">
      <SearchPanel></SearchPanel>
      <ListViewOptions></ListViewOptions>
      <p>{albums.albums}</p>
    </div>
  );
}
