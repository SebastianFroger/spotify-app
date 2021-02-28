export class CookieDateHandler {
  static _name = "updatify_last_visit";

  static getLastVisit() {
    const cookie = document.cookie
      .split(";")
      .find((item) => item.trim().startsWith(`${this._name}=`));
    if (cookie === undefined) return this.setLastVisit();
    return cookie.split("=")[1];
  }

  static setLastVisit() {
    document.cookie = `${this._name}=${this.getDate()}`;
    return document.cookie.split("=")[1];
  }

  static getDate() {
    return new Date().toISOString().slice(0, 10);
  }
}
