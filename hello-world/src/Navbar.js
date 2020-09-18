import React, { Component } from "react";
import { ThemeContext } from "./contetxs/ThemeContextProvider";

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Navbar Context</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

Navbar.contextType = ThemeContext;

export default Navbar;
