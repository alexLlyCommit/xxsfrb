import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

class App extends Component {
  state = {
    pargeAge: 3
  };
  onGreet(age) {
    console.log(age, 8888);
    this.setState({
      pargeAge: age
    });
  }
  render() {
    const user = {
      name: "Anna",
      hobbies: ["Sports", "Reading"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello !!</h1>
            <p>{this.state.pargeAge}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home
              name={"Max"}
              age={12}
              user={user}
              greet={this.onGreet.bind(this)}
            >
              <p>I am child</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
