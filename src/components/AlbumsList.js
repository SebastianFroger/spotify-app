import React, { useState } from "react";
import SearchPanel from "./SearchPanel";

export default function AlbumsList() {
  const [albums, setAlbums] = useState({ albums: "No albums found" });

  return (
    <div className="albums">
      <SearchPanel></SearchPanel>
      <p>{albums.albums}</p>
    </div>
  );
}
