import axios from "axios";

export default class Api {
  constructor() {
    // this.baseUrl = "https://localhost";
    // this.port = 4000;
    this.getTitle = this.getTitle.bind(this);
    this.baseUrl = "https://backend-nichango.herokuapp.com";
    this.port = 443;
  }

  handleError(e) {
    console.error("[Api: error]", e);
    return Promise.reject(e);
  }

  createRoom(title) {
    return axios
      .post(`${this.baseUrl}:${this.port}/room`, { title })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getRoom(roomId) {
    return axios
      .get(`${this.baseUrl}:${this.port}/room/${roomId}`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getTitle() {
    return axios
      .get(`${this.baseUrl}:${this.port}/title`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  postText(roomId, text) {
    return axios
      .post(`${this.baseUrl}:${this.port}/room/${roomId}/text`, { text })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }
}
