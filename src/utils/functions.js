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

export class CookieDataHandler {
  static _name = "updatify_last_visit";

  static getLastVisit() {
    const cookie = document.cookie
      .split(";")
      .find((item) => item.trim().startsWith(`${this._name}=`));
    if (cookie === undefined) return this.setLastVisit();
    return cookie.split("=")[1];
  }

  static setLastVisit() {
    const date = new Date().toISOString().slice(0, 10);
    document.cookie = `${this._name}=${date}`;
    return document.cookie.split("=")[1];
  }
}
