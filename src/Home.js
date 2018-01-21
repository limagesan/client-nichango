import React, { Component } from "react";
import Api from "./Api";
import "./Home.css";
import Loading from "./Loading";

class Home extends Component {
  constructor() {
    super();
    this.getTitle = this.getTitle.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.api = new Api();
    this.state = {
      title: "",
      url: "",
      step: 1,
      isShowLoading: false
    };
    this.goStep2 = this.goStep2.bind(this);
    this.goStep3 = this.goStep3.bind(this);
  }

  getTitle() {
    this.api.getTitle().then(res => {
      console.log("gettitle", res);
      this.setState({ title: res.data.title });
    });
  }

  goStep2() {
    console.log("yoba");
    this.getTitle();
    this.setState({ step: 2 });
  }

  goStep3() {
    this.createRoom();
    this.setState({ step: 3 });
  }

  createRoom() {
    const title = this.state.title;
    this.api
      .createRoom(title)
      .then(res => {
        console.log("[Api: CreateRoom]", res);
        const url = `/room/${res.data.room._id}`;
        this.setState({ url });
        // this.props.history.push(`/room/${res.roomId}`);
      })
      .catch(err => {
        alert("Failed sign up");
      });
  }

  tweetLink() {}

  render() {
    let element = <Step1 clickNext={this.goStep2} />;
    if (this.state.step == 2) {
      element = (
        <Step2
          getTitle={this.getTitle}
          clickNext={this.goStep3}
          title={this.state.title}
        />
      );
    } else if (this.state.step == 3) {
      element = (
        <Step3
          tweetLink={this.tweetLink}
          title={this.state.title}
          url={this.state.url}
        />
      );
    }
    return <div className="Home">{element}</div>;
  }
}

export default Home;

const Step1 = ({ clickNext }) => (
  <div>
    <div className="img-wrapper">
      <img src="img/logo-2ch_ngo-02.png" className="logo" />
    </div>
    <div className="explain-name">にちゃンゴとは</div>
    <div className="explain">
      面白いテーマを決めて<br />匿名で投稿するだけで<br />お金がもらえるSNSンゴ
    </div>
    <div className="start button" onClick={clickNext}>
      にちゃンゴする
    </div>
  </div>
);

const Step2 = ({ getTitle, clickNext, title }) => (
  <div>
    <div className="img-wrapper">
      <img src="img/logo-2ch_ngo-02.png" className="logo" />
    </div>
    <div className="theme">テーマ</div>
    <div className="theme-name-wrapper">
      <div className="theme-name">{title}</div>
      <div className="change">
        <img
          src="img/refresh-button.png"
          className="refresh"
          onClick={getTitle}
        />
      </div>
      <div className="clear" />
    </div>
    <div className="submit-theme button" onClick={clickNext}>
      決めたンゴ
    </div>
  </div>
);

const Step3 = ({ tweetLink, title, url }) => {
  const tweetText =
    "「" +
    title +
    "」" +
    "のスレが始まったンゴ " +
    window.location.host +
    url +
    " %23にちゃンゴ";
  return (
    <body>
      <div className="img-wrapper">
        <img src="img/logo-2ch_ngo-02.png" className="logo" />
      </div>
      <div className="made-sub">テーマ決まったンゴ！！</div>
      <div className="theme-wrapper">
        <div className="theme-blue">テーマ</div>
        <div className="made-theme">{title}</div>
      </div>
      <div className="theme-blue">{url && window.location.host + url}</div>
      <a href={`https://twitter.com/intent/tweet?text=${tweetText}`}>
        <div className="link-twitter white-button" onClick={tweetLink}>
          リンクをツイートするンゴ
        </div>
      </a>
    </body>
  );
};
