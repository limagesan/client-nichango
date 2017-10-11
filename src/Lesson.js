import React, { Component } from "react";
import Api from "./Api";

class Lesson extends Component {
  constructor() {
    super();
    this.api = new Api();
    this.getUsers = this.getUsers.bind(this);
    this.getUsers();
  }

  getUsers() {
    this.api.getUsers().then(res => {
      console.log("getUsers", res);
    })
  }

  render() {
    return (
      <div className="Lesson">
        <h2>Lesson</h2>
      </div>
    )
  }
}

export default Lesson;