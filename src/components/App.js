import React, { useState, useEffect } from "react";
import Header from "./Header";
import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";
import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists } from "../utils/fetchData";

export default function App() {
  const [date, setDate] = useState();
  const [artists, setArtists] = useState();

  useEffect(() => {
    setDate(CookieDateHandler.getLastVisit());
    fetchFollowedArtists().then((res) => setArtists(res));
  }, []);

  return (
    <div>
      <Header></Header>
      <AlbumsListOptions></AlbumsListOptions>
      <AlbumsList></AlbumsList>
    </div>
  );
}
