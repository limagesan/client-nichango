import React, { Component } from "react";
import Api from "./Api";

class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.api = new Api();
    this.state = {
      username: "",
      password: "",
      isShowingLoginFailed: false
    }
  }

  signIn() {
    const { username, password } = this.state;
    this.api.signIn(username, password).then((res) => {
      console.log("[Api: SignIn]", res);
      localStorage.setItem("token", res.data.token);
      this.props.history.push("/lesson");
    }).catch((err) => {
      this.setState({ isShowingLoginFailed: true });
    });
  }

  signUp() {
    const { username, password } = this.state;
    this.api.signUp(username, password).then((res) => {
      console.log("[Api: SignUp]", res);
      localStorage.setItem("token", res.data.token);
      this.props.history.push("/lesson");
    }).catch((err) => {
      alert("Failed sign up");
    });;
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.signIn}>SignIn</button>
        <button onClick={this.signUp}>SignUp</button>
        <LoginFailed isShowing={this.state.isShowingLoginFailed} />
      </div>
    );
  }
}

const LoginFailed = ({ isShowing }) => {
  return (isShowing && (
    <div className="loginFailed">
      ユーザー名またはパスワードが間違っています
    </div>
  ));
};

export default Home;