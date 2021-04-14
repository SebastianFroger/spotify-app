import React from "react";

import AlbumCard from "./AlbumCard";

export default function AlbumsList({ data }) {
  return (
    <div className="albums-list content">
      {data.map((artist) => {
        return artist.map((album) => {
          return <AlbumCard key={album.id} album={album}></AlbumCard>;
        });
      })}
    </div>
  );
}
