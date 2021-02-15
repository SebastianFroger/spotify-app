import React from "react";
import AlbumCard from "./AlbumCard";

import albumData from "../mockup-data/AlbumData";

export default function AlbumsList() {
  return (
    <div className="albums-list content">
      <AlbumCard
        cover={albumData.images[1].url}
        artist={albumData.artists[0].name}
        album={albumData.name}
      ></AlbumCard>
    </div>
  );
}
