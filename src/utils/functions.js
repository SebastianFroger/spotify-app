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

export function handleLogout() {
  localStorage.clear();
  window.location.href = "http://localhost:3000/";
  console.log("Auto log out");
}
