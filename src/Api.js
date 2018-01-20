import axios from "axios";

export default class Api {
  constructor() {
    this.baseUrl = "https://localhost";
    this.port = 4000;

    // this.baseUrl = "https://jobhub2017.herokuapp.com";
    // this.port = 443;
  }

  handleError(e) {
    console.error("[Api: error]", e);
    return Promise.reject(e);
  }

  createRoom() {
    return axios
      .post(`${this.baseUrl}:${this.port}/room`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getTexts(roomId) {
    return axios
      .get(`${this.baseUrl}:${this.port}/room/${roomId}`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }
}
