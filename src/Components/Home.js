import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
    this.onDecrease = this.onDecrease.bind(this);
  }
  onMakerOlder() {
    let age = this.state.age + 3;
    this.setState({
      age
    });
  }
  onReduceOlder = () => {
    let age = this.state.age - 3;
    this.setState({
      age
    });
  };
  onDecrease() {
    let age = this.state.age - 3;
    this.setState({
      age
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            <div>
              your name is {this.props.name}, your age is {this.state.age}
            </div>
            <button
              className="btn btn-primary"
              onClick={this.onMakerOlder.bind(this)}
            >
              Make me order
            </button>
            <br />
            <br />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.onMakerOlder()}
            >
              Make me order
            </button>
            <br />
            <br />
            <br />
            <button className="btn btn-primary" onClick={this.onReduceOlder}>
              Reduce me order
            </button>
            <br />
            <br />
            <br />
            <button className="btn btn-primary" onClick={this.onReduceOlder}>
              Reduce me order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};
Home.defaultProps = {
  name: "Harry",
  age: 20,
  user: ["Play", "Sing"]
};
