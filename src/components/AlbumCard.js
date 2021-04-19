import React, { useState } from "react";
import { ReactComponent as PlayButton } from "../images/play-solid.svg";

export default function AlbumCard(props) {
  const [selected, setSelected] = useState(false);
  const name = props.album.name;
  const artist = props.album.artists.map((a) => a.name).join();
  const img = props.album.images[0].url;
  const date = props.album.release_date;
  const type = props.album.album_type;

  const handleSelect = () => {
    setSelected((selected) => !selected);
  };

  return (
    <div
      className={
        selected ? "album-card content card-selected" : "album-card content"
      }
    >
      <div className="img-container">
        <img src={img} alt="cover" onClick={handleSelect} />
      </div>
      <div className="card-bottom">
        <p className={"small-font"}>{type}</p>
        <p className={"small-font"}>{date}</p>

        <PlayButton className="play-button"></PlayButton>
      </div>
      <div className="card-bottom">
        <div>
          <p className={"big-font"}>{name}</p>
          <p className={"big-font"}>{artist}</p>
        </div>
        <br />
      </div>
    </div>
  );
}
