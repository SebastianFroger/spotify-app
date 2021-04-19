import React from "react";

import AlbumsListOptions from "./AlbumsListOptions";
import AlbumCard from "./AlbumCard";
import LoadingIcon from "./LoadingIcon";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists, fetchMultipleAlbums } from "../utils/fetchData";
import {
  sortArtistsByName,
  sortAlbumsByDate,
  validateAlbumDate,
  validateAlbumType,
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
        searchDate: "2021-01-01",
        todayDate: CookieDateHandler.getDate(),
        showAlbums: true,
        showSingles: false,
        selectAll: false,
        fetchAmount: 20, // api limit is 20 ids
      },
      fetchCount: 0,
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
    const start = this.state.fetchCount * this.state.options.fetchAmount;
    const end = start + this.state.options.fetchAmount;

    const ids = this.artistIds.slice(start, end);
    const newAlbums = await fetchMultipleAlbums(ids);
    const sortedAlbums = newAlbums.map((albums) => {
      return sortAlbumsByDate(albums);
    });

    sortedAlbums.forEach((albums) => {
      this.albums = this.albums.concat(albums);
    });

    const count = this.state.fetchCount + 1;
    this.setState({ fetchCount: count });

    this.updateAlbumsDisplay();
  };

  // sort by date and add to state
  updateAlbumsDisplay = async () => {
    const validAlbums = this.albums.filter(
      (album) =>
        validateAlbumType(this.state.options, album) &&
        validateAlbumDate(this.state.options.searchDate, album)
    );

    this.setState({ validAlbums: validAlbums, status: "ok" });
  };

  // set options to state
  onOptionsChange = (options) => {
    this.setState({ ...this.state, options: options });
    this.updateAlbumsDisplay();
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
      if (this.state.validAlbums.length === 0) {
        return (
          <div>
            <AlbumsListOptions
              options={this.state.options}
              callback={this.onOptionsChange}
              onSave={this.onSaveSelected}
            ></AlbumsListOptions>
            <p className="albums-list content">Nothing to show. </p>
          </div>
        );
      } else {
        return (
          <div>
            <AlbumsListOptions
              options={this.state.options}
              callback={this.onOptionsChange}
              onSave={this.onSaveSelected}
            ></AlbumsListOptions>
            <button onClick={this.fetchData}>Load more</button>
            <div className="albums-list content">
              {this.state.validAlbums.map((album, i) => {
                return <AlbumCard key={i} album={album}></AlbumCard>;
              })}
            </div>
            <button onClick={this.fetchData}>Load more</button>
          </div>
        );
      }
    }
  }
}
