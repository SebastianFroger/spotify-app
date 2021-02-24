export async function fetchUser() {
  const url = "https://api.spotify.com/v1/me";
  const params = JSON.parse(localStorage.getItem("params"));

  try {
    let response = await fetch(url, {
      headers: { Authorization: "Bearer " + params.access_token },
    });

    return await response.json();
  } catch (err) {
    console.log("could not fetch user data");
  }
}

// export async function fetchUser() {
//   const url = "https://api.spotify.com/v1/me";
//   const params = JSON.parse(localStorage.getItem("params"));

//   try {
//     let response = await fetch(url, {
//       headers: { Authorization: "Bearer " + params.access_token },
//     });

//     return await response.json();
//   } catch (err) {
//     console.log("could not fetch user data");
//   }
// }
