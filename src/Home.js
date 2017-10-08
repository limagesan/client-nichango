import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push('/lesson');
  }
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <button onClick={this.handleClick}>GoLessonList</button>
      </div>
    );
  }
}

export default Home;