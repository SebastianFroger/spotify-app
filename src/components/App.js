import React, { useState, useEffect } from "react";
import Header from "./Header";
import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";
import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists } from "../utils/fetchData";

export default function App() {
  const [data, setData] = useState({
    lastVisitDate: null,
    searchDate: null,
    showAlbums: true,
    showSingles: false,
    selectAll: false,
    artists: null,
  });

  useEffect(() => {
    const date = CookieDateHandler.getLastVisit();
    fetchFollowedArtists().then((res) =>
      setData({ ...data, lastVisitDate: date, artists: res })
    );
  }, []);

  return (
    <div>
      <Header></Header>
      <AlbumsListOptions options={data} callback={setData}></AlbumsListOptions>
      <AlbumsList options={data}></AlbumsList>
    </div>
  );
}
