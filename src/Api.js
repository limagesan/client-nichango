import axios from "axios";

export default class Api {
  constructor() {
    this.baseUrl = "http://127.0.0.1";
    this.port = 4000;
  }

  handleError(e) {
    console.error("[Api: error]", e);
  }

  login(userId) {
    return axios
      .post(`${this.baseUrl}:${this.port}/users/login`, { userId })
      .then(res => {
        return {
          res: res || []
        };
      })
      .catch(this.handleError);
  }
}