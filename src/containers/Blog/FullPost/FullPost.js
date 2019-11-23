import React, { Component } from "react";
import axios from "axios";

import myStyle from "./FullPost.css";

class FullPost extends Component {
  state = {
    loaded: null
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.loaded ||
        (this.state.loaded && this.state.loaded.id !== this.props.id)
      ) {
        axios.get(`/posts/${this.props.match.params.id}`).then(response => {
          // console.log(response.data);
          this.setState({ loaded: response.data });
        });
      }
    }
  }

  deletePost = () => {
    // this.setState({ loaded: null });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loaded) {
      post = (
        <div className={myStyle.FullPost}>
          <h1>{this.state.loaded.title}</h1>
          <p>{this.state.loaded.body}</p>
          <div className={myStyle.Edit}>
            <button className={myStyle.Delete} onClick={this.deletePost}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
