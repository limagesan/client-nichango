import React, { Component } from "react";
import Api from "./Api";

class Home extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.api = new Api();
    this.state = {
      userId: ""
    }
  }
  handleClick() {
    const userId = this.state.userId;
    this.api.login(userId).then((res) => {
      console.log("[Api: Login]", res);
      this.props.history.push("/lesson");
    });
  }
  handleChange(event) {
    this.setState({ userId: event.target.value });
  }
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <input type="text" value={this.state.userId} onChange={this.handleChange} />
        <button onClick={this.handleClick}>GoLessonList</button>
      </div>
    );
  }
}

export default Home;