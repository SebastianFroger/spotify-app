import React from "react";
import { ReactComponent as PlayButton } from "../images/play-solid.svg";

export default function AlbumCard(props) {
  return (
    <div className="album-card content">
      <img src={props.cover} alt="cover" />
      <div>
        <div>
          <p>{props.artist}</p>
          <p>{props.album}</p>
        </div>
        <PlayButton className="play-icon"></PlayButton>
      </div>
    </div>
  );
}
