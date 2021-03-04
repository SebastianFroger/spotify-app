import React, { useState, useEffect } from "react";

import AlbumsListOptions from "./AlbumsListOptions";
import AlbumCard from "./AlbumCard";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists } from "../utils/fetchData";

export default function AlbumsList() {
  const [options, setOptions] = useState({
    lastVisitDate: CookieDateHandler.getLastVisit(),
    searchDate: CookieDateHandler.getLastVisit(),
    todayDate: CookieDateHandler.getDate(),
    showAlbums: true,
    showSingles: false,
    selectAll: false,
  });
  const [req, setReq] = useState();

  useEffect(() => {
    setReq("loading");

    fetchFollowedArtists().then((res) => {
      setReq(res);
    });
  }, []);

  if (req === "loading") {
    return (
      <div>
        <AlbumsListOptions
          options={options}
          callback={setOptions}
        ></AlbumsListOptions>
        <p>Loading...</p>
      </div>
    );
  } else if (req !== null && req !== undefined) {
    return (
      <div>
        <AlbumsListOptions
          options={options}
          callback={setOptions}
        ></AlbumsListOptions>
        <div className="albums-list content">
          {req.map((album, i) => (
            <AlbumCard key={i} album={album}></AlbumCard>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <AlbumsListOptions
          options={options}
          callback={setOptions}
        ></AlbumsListOptions>
        <p>An error occured... Please try again.</p>
      </div>
    );
  }
}
