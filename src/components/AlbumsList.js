import React from "react";

import AlbumCard from "./AlbumCard";

export default function AlbumsList({ albums }) {
  if (albums.length === 0)
    return (
      <div className="albums-list content">
        <p>Nothing to show. </p>
      </div>
    );
  else {
    return (
      <div className="albums-list content">
        {albums.map((album) => {
          return <AlbumCard key={album.id} album={album}></AlbumCard>;
        })}
      </div>
    );
  }
}
