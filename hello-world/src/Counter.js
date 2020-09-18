import React, { Component } from "react";
//import ErrorComponent from "./ErrorComponent";

export function ErrorComponent() {
  return <div>props.ignor</div>;
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        count: props.seed,
      };
    }
    return null;
  }
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("--------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps
    ) {
      console.log("Should Component Update");
      console.log("-----------------------");
      return false;
    }

    console.log("Compinent should update");
    console.log("-----------------------");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("Snapshot Before Update");
    console.log("-----------------------");

    return null;
  }

  render() {
    console.log("Render", this.state.error);
    if (this.props.showErrorComponent && this.state.error) {
      return <div> We have some error!{this.state.error.message()}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">{this.state.count}</div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("-----------------------");
  }

  componentDidCatch(error, info) {
    console.log("Catch component error");

    this.setState({ error, info });
  }
}

export default Counter;
