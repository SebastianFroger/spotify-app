import React from "react";

import AlbumsListOptions from "./AlbumsListOptions";
import AlbumsList from "./AlbumsList";
import LoadingIcon from "./LoadingIcon";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists, fetchMultipleAlbums } from "../utils/fetchData";
import { sortArtistsByName, sortAlbumsByDate } from "../utils/sorting";

export default class AlbumsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        lastVisitDate: CookieDateHandler.getLastVisit(),
        searchDate: CookieDateHandler.getLastVisit(),
        todayDate: CookieDateHandler.getDate(),
        showAlbums: true,
        showSingles: false,
        selectAll: false,
        fetchCount: 10,
      },
      artistsIds: [],
      albums: [],
    };
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  async fetchInitialData() {
    const artists = await fetchFollowedArtists();
    const sortedArtists = await sortArtistsByName(artists);
    const albums = await fetchMultipleAlbums(
      sortedArtists.slice(0, this.state.options.fetchCount)
    );
    const sortedAlbums = await albums.map((albums) => {
      return sortAlbumsByDate(albums);
    });

    this.setState({ artistsIds: artists, albums: sortedAlbums });
  }

  fetchAdditionalData = async () => {
    const start = this.state.albums.length;
    const end = start + this.state.options.fetchCount;

    const ids = this.state.artistsIds.slice(start, end);
    const newAlbums = await fetchMultipleAlbums(ids);
    const sortedAlbums = await newAlbums.map((albums) => {
      return sortAlbumsByDate(albums);
    });

    console.log("sortedAlbums", sortedAlbums);
    // add to albums
    const newAlbumsArr = this.state.albums.concat(sortedAlbums);
    this.setState({ albums: newAlbumsArr });
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
    if (this.state.albums.length === 0) {
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
    } else {
      return (
        <div>
          <AlbumsListOptions
            options={this.state.options}
            callback={this.onOptionsChange}
            onSave={this.onSaveSelected}
          ></AlbumsListOptions>
          <AlbumsList data={this.state.albums}></AlbumsList>
          <button onClick={this.fetchAdditionalData}>Load more</button>
        </div>
      );
    }
  }
}
