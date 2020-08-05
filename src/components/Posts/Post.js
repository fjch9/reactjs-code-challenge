import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../../../src/redux/actions/commentsActions";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.loadComments = this.loadComments.bind(this);
  }

  loadComments() {
    console.log(this.props.post.id);
    this.props.fetchComments({ id: this.props.post.id });
  }
  render() {
    return (
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.post.title}</h5>
        </div>
        <p className="mb-1">{this.props.post.body}</p>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={this.loadComments}
        >
          View Comments
        </button>

        {this.props.comments.length > 0 && <div>WIP</div>}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.items
});

export default connect(mapStateToProps, { fetchComments })(PostItem);
