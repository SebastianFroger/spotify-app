import axios from "axios";

// get the access_token, token_type and expires_in, and their values, from url as an object
export const getUrlParams = (url) => {
  const token = {};

  url
    .slice(1) // remove #
    .split("&")
    .forEach((item) => {
      const [title, value] = item.split("=");
      token[title] = value;
    });

  return token;
};

// set token values as default headers in axios calls
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.commons[
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log("Error setting auth token");
  }
};
