import React, { Component } from "react";
import { ThemeContext } from "./contetxs/ThemeContextProvider";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ background: theme.ui }}>C programming</li>
                <li style={{ background: theme.ui }}>Data Structure</li>
                <li style={{ background: theme.ui }}>
                  Automate Boring stuff by Python
                </li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
