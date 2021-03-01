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

export async function fetchFollowedArtists(after = null) {
  try {
    const _url = new URL("https://api.spotify.com/v1/me/following");
    const _params = JSON.parse(localStorage.getItem("params"));
    _url.searchParams.append("type", "artist");
    _url.searchParams.append("limit", 50);

    let _response = await fetch(_url, {
      headers: { Authorization: "Bearer " + _params.access_token },
    });
    return await _response.json();
  } catch (err) {
    console.log("could not fetch followed artists");
    console.log(err);
  }
}
