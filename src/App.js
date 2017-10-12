import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Lesson from './Lesson';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/lesson" component={Lesson} />
              <Route component={UndefinedPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

class PrivateRoute extends Component {
  constructor() {
    super();
    this.authorized = localStorage.getItem("token");
  }

  render() {
    const { component: Component, ...rest } = this.props;
    console.log("props", this.props);
    return (
      <Route {...rest} render={props => (
        this.authorized ? (
          <Component {...props} />
        ) : (
            <Redirect to="/" />
          )
      )} />
    )
  }
}

const UndefinedPage = props => {
  return (
    <div className="UndefinedPage alert alert-danger">
      Page not Found.
    </div>
  );
}

export default App;
