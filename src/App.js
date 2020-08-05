import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import PostsList from "./components/Posts/PostsList";
import store from "./redux/store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <PostsList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
