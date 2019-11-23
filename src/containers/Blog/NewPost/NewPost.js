import React, { Component } from "react";
import axios from "axios";
import myStyle from "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Bhuwan",
    submitted: false
  };
  componentDidMount() {
    // iF unauth => his.props.history.replace("/url");
  }
  postDataHandler = () => {
    const bodyData = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axios.post("/posts", bodyData).then(response => {
      console.log(response);
      // this.setState({ submitted: true });
      this.props.history.replace("/");
    });
  };

  render() {
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/" />;
    // }

    return (
      <div className={myStyle.NewPost}>
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Bhuwan">Max</option>
          <option value="Samrat">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
