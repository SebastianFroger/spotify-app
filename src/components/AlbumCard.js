import React from "react";
import { ReactComponent as PlayButton } from "../images/play-solid.svg";

export default function AlbumCard(props) {
  const { name, id } = props.album;

  return (
    <div className="album-card content">
      <div className="img-container">
        <img src="img.jpg" alt="cover" />
      </div>
      <div className="card-bottom">
        <div>
          <p>{name}</p>
          <p>{id}</p>
        </div>
        <PlayButton className="play-button"></PlayButton>
      </div>
    </div>
  );
}
