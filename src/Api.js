import axios from "axios";

export default class Api {
  constructor() {
    this.baseUrl = "http://127.0.0.1";
    this.port = 4000;
  }

  handleError(e) {
    console.error("[Api: error]", e);
    return Promise.reject(e);
  }

  signIn(username, password) {
    return axios
      .post(`${this.baseUrl}:${this.port}/users/login`, { username, password })
      .then(res => {
        console.log("error in api")
        return {
          res: res || []
        };
      })
      .catch(this.handleError);
  }

  signUp(username, password) {
    return axios
      .post(`${this.baseUrl}:${this.port}/users`, { username, password })
      .then(res => {
        return {
          res: res || []
        };
      })
      .catch(this.handleError);
  }
}