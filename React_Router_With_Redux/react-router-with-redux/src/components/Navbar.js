import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

export default withRouter(function Navbar(props) {
  //   setTimeout(() => {
  //     props.history.push("/contact");
  //   }, 4000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Lululu</a>
        <ul className="right">
          {
            //     <li>
            //     <a href="/">Home</a>
            //   </li>
            //   <li>
            //     <a href="/about">About</a>
            //   </li>
            //   <li>
            //     <a href="/contact">Contact</a>
            //   </li>
          }

          {
            //       <li>
            //     <Link to="/">Home</Link>
            //   </li>
            //   <li>
            //     <Link href="/about">About</Link>
            //   </li>
            //   <li>
            //     <Link href="/contact">Contact</Link>
            //   </li>
          }

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
});
