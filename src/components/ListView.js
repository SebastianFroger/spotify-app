import React from "react";
import AlbumCard from "./AlbumCard";

export default function ListView() {
  return (
    <div className="listview content">
      <AlbumCard></AlbumCard>
      <AlbumCard></AlbumCard>
      <AlbumCard></AlbumCard>
    </div>
  );
}
