export default class Sorting {
  //   static sortArtistsByName(artists) {
  //     // sort by name
  //     return artists.sort((a, b) => {
  //       var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //       var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //       if (nameA < nameB) {
  //         return -1;
  //       }
  //       if (nameA > nameB) {
  //         return 1;
  //       }

  //       // names must be equal
  //       return 0;
  //     });
  //   }

  static sortAlbumsReleasedSince(artists, albums, date) {
    for (let i = artists.length - 1; i >= 0; i--) {
      artists[i].albums = albums[i].items.filter(
        (a) => Date.parse(a.release_date) > Date.parse(date)
      );

      if (artists[i].albums.length === 0) {
        artists.splice(i, 1);
      }
    }

    return artists;
  }
}
