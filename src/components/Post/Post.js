import React from "react";
import myStyle from "./Post.css";

const post = props => (
  <article className={myStyle.Post} onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className={myStyle.Info}>
      <div className={myStyle.Author}>{props.author}</div>
    </div>
  </article>
);

export default post;
