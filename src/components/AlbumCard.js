import React from "react";
import { ReactComponent as PlayButton } from "../images/play-solid.svg";

export default function AlbumCard(props) {
  const name = props.album.name;
  const artist = props.album.artistName;
  const img = props.album.images[1].url;
  const date = props.album.release_date;

  return (
    <div className="album-card content">
      <div className="img-container">
        <img src={img} alt="cover" />
      </div>
      <div className="card-bottom">
        <div>
          <p>{name}</p>
          <p>{artist}</p>
          <p>{date}</p>
        </div>
        <PlayButton className="play-button"></PlayButton>
      </div>
    </div>
  );
}
