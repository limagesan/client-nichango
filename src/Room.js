import React, { Component } from "react";
import Api from "./Api";
import { Button, Input } from "semantic-ui-react";
import { BeatLoader } from "react-spinners";

class Room extends Component {
  constructor() {
    super();
    this.api = new Api();
    this.getRoom = this.getRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postText = this.postText.bind(this);
    this.state = {
      title: "",
      texts: [],
      textValue: "",
      isShowLoading: false
    };
  }

  componentWillMount() {
    this.getRoom();
  }

  getRoom() {
    this.setState({ isShowLoading: true });
    this.api.getRoom(this.props.match.params.roomId).then(res => {
      this.setState({ isShowLoading: false });
      console.log("getRoom", res);
      this.setState({ title: res.data.room.title, texts: res.data.room.texts });
    });
  }

  postText(e) {
    e.preventDefault();

    const text = this.state.textValue;
    this.api.postText(this.props.match.params.roomId, text).then(res => {
      console.log("postText res", res);
      this.getRoom();
    });
    this.setState({ textValue: "" });
  }

  handleChange(e) {
    this.setState({ textValue: e.target.value });
  }
  render() {
    const texts = this.state.texts.map((text, index) => (
      <div key={index} className="comment-container">
        <div className="comment">{text}</div>
      </div>
    ));
    return (
      <div className="Room">
        <div className="theme-timeline">{this.state.title}</div>
        <div className="sweet-loading">
          <BeatLoader loading={this.state.isShowLoading} />
        </div>
        <div className="card-list">{texts}</div>
        <footer>
          <form className="fillbox" action="#" onSubmit={this.postText}>
            <div className="col1">
              <input
                className="text-input"
                maxLength="15"
                type="text"
                value={this.state.textValue}
                onChange={this.handleChange}
              />
            </div>
            <div className="col2">
              <button
                className="send-button"
                type="submit"
                disabled={this.state.textValue == ""}
              >
                送信
              </button>
            </div>
          </form>
        </footer>
      </div>
    );
  }
}

export default Room;
