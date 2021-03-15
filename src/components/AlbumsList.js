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
      status: "Loading...",
      artists: null,
    };
  }

  // what to do on mount
  componentDidMount() {
    this.getAlbums();
  }

  async getAlbums() {
    this.setState({ status: "Fetching followed artists..." });

    // get and sort artists by name
    if (this.state.artists === null) {
      const unsorted = await fetchFollowedArtists();
      const sorted = Sorting.sortArtistsByName(unsorted);
      this.setState({ artists: sorted.slice(0, 10) });
    }

    // get albums until a certain date
    this.setState({ status: "Fetching albums..." });

    const artistsCopy = this.state.artists.slice();
    console.log("artists", artistsCopy);

    artistsCopy.map(async (artist, index) => {
      if (!artist.albums) {
        artist.albums = [];
      }

      const newAlbums = await fetchAlbums(
        artist.id,
        this.state.options.searchDate,
        artist.albums.length
      );

      console.log("fetched albums", newAlbums);

      if (newAlbums.length > 0) {
        let newArtist = { ...artist };
        newArtist.albums = artist.albums.concat(newAlbums);

        let newArtists = [...this.state.artists];
        newArtists[index] = newArtist;
        this.setState({ artists: newArtists, status: "Ready" });
      }
    });
  }

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
    if (this.state.status !== "Ready") {
      return (
        <div>
          <AlbumsListOptions
            options={this.state.options}
            callback={this.onOptionsChange}
            onSave={this.onSaveSelected}
          ></AlbumsListOptions>
          <p>{this.state.status} </p>
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
            {this.state.artists.map((artist) => {
              return artist.albums.map((album) => (
                <AlbumCard key={album.id} album={album}></AlbumCard>
              ));
            })}
          </div>
        </div>
      );
    }
  }
}
