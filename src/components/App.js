import React, { useState, useEffect } from "react";

import Header from "./Header";
import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists } from "../utils/fetchData";

export default function App() {
  const [data, setData] = useState({
    lastVisitDate: CookieDateHandler.getLastVisit(),
    searchDate: CookieDateHandler.getLastVisit(),
    todayDate: CookieDateHandler.getDate(),
    showAlbums: true,
    showSingles: false,
    selectAll: false,
    artists: null,
  });

  useEffect(() => {
    fetchFollowedArtists().then((res) => setData({ ...data, artists: res }));
  }, []);

  return (
    <div>
      <Header></Header>
      <AlbumsListOptions options={data} callback={setData}></AlbumsListOptions>
      <AlbumsList options={data}></AlbumsList>
    </div>
  );
}
