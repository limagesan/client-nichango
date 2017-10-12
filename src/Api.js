import axios from "axios";

export default class Api {
  constructor() {
    this.baseUrl = "http://127.0.0.1";
    this.port = 4000;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  }

  handleError(e) {
    console.error("[Api: error]", e);
    return Promise.reject(e);
  }

  signIn(username, password) {
    return axios
      .post(`${this.baseUrl}:${this.port}/login`, { username, password })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  signUp(username, password) {
    return axios
      .post(`${this.baseUrl}:${this.port}/users`, { username, password })
      .then(res => {
        return res
      })
      .catch(this.handleError);
  }

  getUsers() {
    return axios
      .get(`${this.baseUrl}:${this.port}/users`)
      .then(res => {
        return res
      })
      .catch(this.handleError);
  }
}