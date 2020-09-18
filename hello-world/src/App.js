import React, { Component } from "react";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Booklist from "./Booklist";
import ThemeContextProvider from "./contetxs/ThemeContextProvider";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProps: 0,
      seed: 40,
      showErrorComponent: false,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unMountCounter = () => this.setState({ mount: false });
    this.ignoreProps = () => this.setState({ ignoreProps: Math.random() });
    this.seedGenarator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toggleError = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }
  render() {
    return (
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>

      // {
      //<div>
      //   <button onClick={this.mountCounter} disabled={this.state.mount}>
      //     Mount
      //   </button>
      //   <button onClick={this.unMountCounter} disabled={!this.state.mount}>
      //     UnMount
      //   </button>
      //   <button onClick={this.ignoreProps}>Should Update</button>
      //   <button onClick={this.seedGenarator}>Generate Seed</button>
      //   <button onClick={this.toggleError}>Toggle Error</button>
      //   {this.state.mount ? (
      //     <Counter
      //       ignoreProps={this.state.ignoreProps}
      //       seed={this.state.seed}
      //       showErrorComponent={this.state.showErrorComponent}
      //     />
      //   ) : null}

      //</div>

      // }
    );
  }
}

export default App;
