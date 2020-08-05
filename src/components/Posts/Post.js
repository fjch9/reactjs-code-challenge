import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../../../src/redux/actions/commentsActions";
import CommentsList from "../Comments/CommentsList";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleComments = this.toggleComments.bind(this);
  }

  toggleComments() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div
        className="list-group-item list-group-item-action"
        onClick={this.toggleComments}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.post.title}</h5>
        </div>
        <p className="mb-1">{this.props.post.body}</p>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={this.toggleComments}
        >
          {this.state.toggle ? "Hide Comments" : "View Comments"}
        </button>

        {this.state.toggle && <CommentsList id={this.props.post.id} />}

        {/* {this.props.comments.length > 0 && this.state.toggle && <div>WIP</div>}
        {this.props.comments.length === 0 && this.state.toggle && (
          <div> - No recent Activity - </div>
        )} */}
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
