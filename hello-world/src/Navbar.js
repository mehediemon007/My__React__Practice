import React, { Component } from "react";
import { AuthContext } from "./contetxs/AuthContextProvider";
import { ThemeContext } from "./contetxs/ThemeContextProvider";

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Navbar Context</h1>
                  <div onClick={toggleAuth} style={{ cursor: "pointer" }}>
                    {isAuthenticated ? "Logged In" : "Logged Out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

//Navbar.contextType = ThemeContext;

export default Navbar;
