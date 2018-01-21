import React, { Component } from "react";
import Api from "./Api";

class Lesson extends Component {
  constructor() {
    super();
    this.api = new Api();
    this.getRoom = this.getRoom.bind(this);
    this.state = {
      title: "",
      texts: []
    };
  }

  getRoom() {
    this.api.getRoom(this.props.match.params.roomId).then(res => {
      console.log("getRoom", res);
    });
  }

  render() {
    return (
      <div className="Room">
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}

export default Lesson;
