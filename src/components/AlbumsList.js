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
  const [req, setReq] = useState({
    artists: null,
    status: true,
  });

  useEffect(() => {
    setReq({ ...req, status: "loading" });

    fetchFollowedArtists().then((res) => {
      console.log(res);
      setReq({ artists: res, status: "ready" });
    });
  }, []);

  if (req.status === "loading") {
    return (
      <div>
        <AlbumsListOptions
          options={options}
          callback={setOptions}
        ></AlbumsListOptions>
        <p>Loading...</p>
      </div>
    );
  }

  if (req.status === "ready" && req.artists !== null) {
    return (
      <div>
        <AlbumsListOptions
          options={options}
          callback={setOptions}
        ></AlbumsListOptions>
        <div className="albums-list content">
          {req.artists.map((album, i) => (
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
