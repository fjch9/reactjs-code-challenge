import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../../../src/redux/actions/postsActions";
import Post from "./Post";

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Recent Activity</h1>
        {this.props.posts.length > 0 && (
          <ul className="list-group">
            {this.props.posts.map((post, idx) => (
              <Post key={idx} post={post} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostsList);
