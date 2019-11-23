import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Posts from "./posts/Posts";
// import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import asyncComponent from "../../hoc/AsyncComponent";

const AsyncComponent = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post"
                    // hash : "#submit"
                    // search : "?submit=true"
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}

        {/* render is important for showing short messages */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={AsyncComponent} />
          <Route path="/:id" exact component={FullPost} />
          <Route render={() => <h1>404! Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
