export function sortArtistsByName(artists) {
  // sort by name
  return artists.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

// write some tests for this
export function sortAlbumsByDate(albums) {
  // sort by name
  return albums.sort((a, b) => {
    var dateA = a.release_date;
    var dateB = b.release_date;

    if (a.release_date_precision === b.release_date_precision) {
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
    }

    if (
      a.release_date_precision === "day" &&
      b.release_date_precision === "year"
    )
      return -1;

    if (
      a.release_date_precision === "year" &&
      b.release_date_precision === "day"
    )
      return 1;

    return 0;
  });
}

export function validateAlbumDate(searchDate, album) {
  if (album.release_date_precision === "day" && album.release_date > searchDate)
    return true;
  if (
    album.release_date_precision === "year" &&
    album.release_date > searchDate.slice(0, 4)
  )
    return true;
  return false;
}

// export function validateAlbumDate(searchDate, releaseDate, datePrecision) {
//   if (datePrecision === "day" && releaseDate >= searchDate) return true;
//   if (datePrecision === "year" && releaseDate >= searchDate.slice(0, 4))
//     return true;
//   return false;
// }

// export function sortAlbumsReleasedSince(artists, albums, date) {
//   for (let i = artists.length - 1; i >= 0; i--) {
//     artists[i].albums = albums[i].items.filter(
//       (a) => Date.parse(a.release_date) > Date.parse(date)
//     );

//     if (artists[i].albums.length === 0) {
//       artists.splice(i, 1);
//     }
//   }

//   return artists;
// }
