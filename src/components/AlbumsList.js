import React from "react";

import AlbumsListOptions from "./AlbumsListOptions";
import AlbumCard from "./AlbumCard";
import Sorting from "../utils/sorting";

import { CookieDateHandler } from "../utils/cookieDateHandler";
import { fetchFollowedArtists, fetchAlbums } from "../utils/fetchData";

export default class AlbumsList extends React.Component {
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
      },
      status: "loading",
      artists: null,
    };
  }

  // what to do on mount
  componentDidMount() {
    this.getAlbums();
  }

  async getAlbums() {
    this.setState({ status: "fetching followed artists" });

    // get and sort artists by name
    if (this.state.artists === null) {
      const unsorted = await fetchFollowedArtists();
      const sorted = Sorting.sortArtistsByName(unsorted);
      this.setState({ artists: sorted.slice(0, 5) });
    }

    // TODO: find way to call this one at the time.... something with Promise()
    const artistsCopy = this.state.artists.slice();
    console.log("artists", artistsCopy);

    const result = artistsCopy.map(async (artist) => {
      if (!artist.albums) {
        artist.albums = [];
      }

      artist.albums = await fetchAlbums(
        artist.id,
        // this.state.options.searchDate,
        "2000_01_01",
        artist.albums.length
      );
    });

    console.log("result", result);
  }

  onOptionsChange = (e) => {
    console.log("options changed", e);
    this.setState(e);
  };

  onSaveSelected = (e) => {
    console.log("save selected", e);
  };

  render() {
    if (this.state.status !== "Ready") {
      return (
        <div>
          <AlbumsListOptions
            options={this.state.options}
            callback={this.onOptionsChange}
            onSave={this.onSaveSelected}
          ></AlbumsListOptions>
          <p>{this.state.status + "..."} </p>
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
          <div className="albums-list content">
            {this.state.artists.map((album, i) => (
              <AlbumCard key={i} album={album}></AlbumCard>
            ))}
          </div>
        </div>
      );
    }
  }
}
