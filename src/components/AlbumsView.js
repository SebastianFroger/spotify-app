import React from "react";

import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";
import LoadingIcon from "./LoadingIcon";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists, fetchMultipleAlbums } from "../utils/fetchData";
import {
  sortArtistsByName,
  sortAlbumsByDate,
  validateAlbumDate,
} from "../utils/sorting";

export default class AlbumsView extends React.Component {
  constructor(props) {
    super(props);

    this.artistIds = [];
    this.albums = [];

    this.state = {
      options: {
        lastVisitDate: CookieDateHandler.getLastVisit(),
        // searchDate: CookieDateHandler.getLastVisit(),
        searchDate: "2019-01-01",
        todayDate: CookieDateHandler.getDate(),
        showAlbums: true,
        showSingles: false,
        selectAll: false,
        fetchCount: 2,
      },
      validAlbums: [],
      status: "loading",
    };
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  async fetchInitialData() {
    const result = await fetchFollowedArtists();
    this.artistIds = sortArtistsByName(result);
    this.fetchData();
  }

  fetchData = async () => {
    const start = this.albums.length;
    const end = start + this.state.options.fetchCount;

    const ids = this.artistIds.slice(start, end);
    const newAlbums = await fetchMultipleAlbums(ids);
    const sortedAlbums = newAlbums.map((albums) => {
      return sortAlbumsByDate(albums);
    });

    sortedAlbums.forEach((albums) => {
      this.albums = this.albums.concat(albums);
    });

    this.updateValidAlbums();
  };

  updateValidAlbums = async () => {
    // sort by date and add to state
    const validAlbums = this.albums.filter(
      (album) =>
        validateAlbumDate(this.state.options.searchDate, album) === true
    );

    this.setState({ validAlbums: validAlbums, status: "ok" });

    console.log("validAlbums", validAlbums);
    validAlbums.forEach((album) => {
      console.log(album.release_date);
    });
  };

  onOptionsChange = (options) => {
    console.log("options changed", options);
    this.setState({ ...this.state, options: options });

    if (this.state.options.searchDate !== options.searchDate) {
      this.getAlbums();
    }
  };

  onSaveSelected = (e) => {
    console.log("save selected", e);
  };

  render() {
    if (this.state.status === "loading") {
      return (
        <div>
          <AlbumsListOptions
            options={this.state.options}
            callback={this.onOptionsChange}
            onSave={this.onSaveSelected}
          ></AlbumsListOptions>
          <br />
          <LoadingIcon></LoadingIcon>
        </div>
      );
    } else if (this.state.status === "ok") {
      return (
        <div>
          <AlbumsListOptions
            options={this.state.options}
            callback={this.onOptionsChange}
            onSave={this.onSaveSelected}
          ></AlbumsListOptions>
          <AlbumsList albums={this.state.validAlbums}></AlbumsList>
          <button onClick={this.fetchData}>Load more</button>
        </div>
      );
    }
  }
}
