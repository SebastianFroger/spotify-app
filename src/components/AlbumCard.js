import { ReactComponent as PlayButton } from "../images/play-solid.svg";

export default function AlbumCard(props) {
  const selected = props.album.selected;
  const name = props.album.name;
  const artist = props.album.artists.map((a) => a.name).join();
  const img = props.album.images[0].url;
  const date = props.album.release_date;
  const type = props.album.album_type;
  const id = props.album.id;

  const handleSelect = () => {
    props.onSelect(id);
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
