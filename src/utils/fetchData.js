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
  } catch (err) {
    console.log("error fetching followed artists");
    console.log(err);
    return err;
  }
}

export async function fetchAlbums(artistId, searchDate, offset = 0) {
  // set fetch params first
  const params = JSON.parse(localStorage.getItem("params"));
  const url = new URL(`https://api.spotify.com/v1/artists/${artistId}/albums`);
  url.searchParams.append("type", artistId);
  url.searchParams.append("include_groups", "album,single,");
  url.searchParams.append("offset", offset);
  url.searchParams.append("limit", 1);
  url.searchParams.append("market", "from_token");
  const header = { Authorization: "Bearer " + params.access_token };

  // do a recursive call
  const fetchData = async (url, searchDate, result = []) => {
    try {
      const response = await fetch(url, { headers: header });
      const data = await response.json();
      result.push(data.items[0]);

      if (data.next !== null && data.items[0].release_date > searchDate) {
        return fetchData(data.next, searchDate, result);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return await fetchData(url, searchDate);
}
