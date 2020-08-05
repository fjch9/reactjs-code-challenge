import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../../../src/redux/actions/commentsActions";
import Comment from "./Comment";

class CommentsList extends Component {
  componentWillMount() {
    this.props.fetchComments({ id: this.props.id });
  }

  render() {
    return (
      <div className="list-group">
        {this.props.comments.length > 0 &&
          this.props.comments.map((comment, idx) => (
            <Comment key={idx} comment={comment} />
          ))}
        {this.props.comments.length === 0 && (
          <div class="list-group-item">No recent activity</div>
        )}

        <button
          type=" button"
          className="btn btn-outline-secondary btn-sm"
          //   onClick={this.toggleComments}
        >
          Add Comment
        </button>
      </div>
    );
  }
}

CommentsList.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.items
});

export default connect(mapStateToProps, { fetchComments })(CommentsList);
