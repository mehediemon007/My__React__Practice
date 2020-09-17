import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStatetoProps)(
  class About extends Component {
    // state = {
    //   posts: [],
    // };

    // componentDidMount() {
    //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //     console.log(res);
    //     this.setState({ posts: res.data.slice(0, 10) });
    //   });
    // }

    render() {
      const { posts } = this.props;
      const postList = posts.length ? (
        posts.map((post) => {
          return (
            <div className="post card" key={post.id}>
              <img src={Logo} alt="React logo" />
              <div className="card-content">
                <Link to={"/" + post.id}>
                  <span className="card-title green-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="center">No Post left....</div>
      );
      return (
        <div className="container about">
          <h4 className="center">About</h4>
          {postList}
        </div>
      );
    }
  }
);
