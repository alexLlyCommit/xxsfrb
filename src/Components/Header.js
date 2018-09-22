import React, { Component } from "react";

export default class Header extends Component {
  state = {
    content: "123"
  };
  render() {
    const title = "这是一个标题";
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Header</h1>
            <p>{title}</p>
            <p>{this.state.content}</p>
            {true ? "Hello" : "no Ok"}
          </div>
        </div>
      </div>
    );
  }
}
