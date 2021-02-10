import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import Line from "./Line";

export default function AlbumsList() {
  const [albums, setAlbums] = useState({ albums: "No albums found" });

  return (
    <div className="albums">
      <Line></Line>
      <SearchPanel></SearchPanel>
      <Line></Line>
      <p>{albums.albums}</p>
    </div>
  );
}
