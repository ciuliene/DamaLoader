import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="loader" id="loader">
          <div className="loader-circle1"></div>
          <div className="loader-circle2"></div>
        </div>
      </div>
    );
  }
}
