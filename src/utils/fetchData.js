export async function fetchUserData() {
  try {
    const _url = "https://api.spotify.com/v1/me";
    const _params = JSON.parse(localStorage.getItem("params"));
    let _response = await fetch(_url, {
      headers: { Authorization: "Bearer " + _params.access_token },
    });

    return await _response.json();
  } catch (_err) {
    console.log("could not fetch user data");
  }
}

export async function fetchFollowedArtists() {
  try {
    let count = 0;
    let stored = [];
    let data;

    const params = JSON.parse(localStorage.getItem("params"));
    const url = new URL("https://api.spotify.com/v1/me/following");
    url.searchParams.append("type", "artist");
    url.searchParams.append("limit", 50);
    url.searchParams.append("after", count);

    // loop until all artists are found
    do {
      url.searchParams.set("after", count);

      data = await fetch(url, {
        headers: { Authorization: "Bearer " + params.access_token },
      }).then((res) => res.json());

      // add data to array
      data.artists.items.forEach((item) => {
        const a = {
          id: item.id,
          name: item.name,
        };
        stored.push(a);
      });

      count++;
    } while (data.artists.items.length > 0);

    return stored;
  } catch (error) {
    console.log("error fetching followed artists");
    console.log(error);
    return error;
  }
}

// get all artists albums using promises
export async function fetchMultipleAlbums(artists) {
  const requests = artists.map((artist) => fetchAlbums(artist.id));
  const albums = await Promise.all(requests);

  const reducer = (accumulator, albums) => accumulator.concat(albums);
  return albums.reduce(reducer);
}

export async function fetchAlbums(artistId, limit = 50) {
  // set fetch params first
  const params = JSON.parse(localStorage.getItem("params"));
  const url = new URL(`https://api.spotify.com/v1/artists/${artistId}/albums`);
  url.searchParams.append("type", "application/json");
  url.searchParams.append("include_groups", "album,single,");
  url.searchParams.append("offset", 0);
  url.searchParams.append("limit", limit);
  url.searchParams.append("market", "from_token");
  const headers = {
    Authorization: "Bearer " + params.access_token,
  };

  try {
    let albums = [];
    albums = await fetchAlbumsRecursive(url, headers, albums);
    return albums;
  } catch (error) {
    console.log(error);
  }
}

// do a recursive search
async function fetchAlbumsRecursive(url, headers, albums = []) {
  try {
    let response = await fetch(url, { headers: headers });

    // add data to results
    if (response.status === 200) {
      const data = await response.json();
      albums = albums.concat(data.items);

      if (data.next !== null) {
        return await fetchAlbumsRecursive(data.next, headers, albums);
      }

      if (response.status !== 200) {
        console.log(response.status);
        // if erroCode 429 try setTimeout with waitime in response
      }

      return albums;
    }
  } catch (error) {
    console.log(error);
  }
}
