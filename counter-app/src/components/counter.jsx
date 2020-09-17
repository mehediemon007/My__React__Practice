import React, { Component } from "react";

class Counter extends Component {
  state = {
    // {value: this.props.counter.value,}
    tags: ["tag1", "tag2", "tag3"],
  };

  componentDidUpdate(prevPops, prevState) {
    console.log("Counter -Updated");
    console.log("Previous-Prpos", prevPops);
    console.log("Previous-State", prevState);
    if (prevPops.counter.value !== this.props.counter.value) {
      //Ajax call
    }
  }

  style = {
    padding: 20,
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>The List is Empty</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // getIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleGetIncrement = () => {
  //   this.getIncrement("Product Id");
  // };

  componentWillUnmount() {
    console.log("Counter - Unmount");
    //Clean Up
  }

  render() {
    console.log("Counter - Rendered.");
    //console.log(this.props);
    return (
      <div>
        {/*this.props.children*/}
        <h4> Title #{this.props.counter.id}</h4>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={
            () =>
              this.props.onIncrement(
                this.props.counter
              ) /*() => this.getIncrement({ id: 1 })*/
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {
          this.state.tags.length === 0 && (
            <p>This list is Empty</p>
          ) /* this is
        called conditionally render content */
        }
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge";
    classes += this.props.counter.value === 0 ? "-warning" : "-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
