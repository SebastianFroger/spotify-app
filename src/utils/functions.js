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
