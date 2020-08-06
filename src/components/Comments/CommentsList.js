import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCommentsById } from "../../../src/redux/actions/commentsActions";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      comments: []
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentWillMount() {
    this.fetchCommentsById();
  }

  componentDidUpdate(prevProps) {
    //check for new changes in the store to update the local state, and update the ui elements
    if (prevProps.comments !== this.props.comments) {
      this.fetchCommentsById();
    }
  }

  fetchCommentsById() {
    this.setState({
      comments: this.props.comments.filter(x => x.postId == this.props.id)
    });
  }
  toggleModal() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div className="comment-list">
        <div className="list-group">
          {this.state.comments.length > 0 &&
            this.state.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          {this.state.comments.length === 0 && (
            <div className="list-group-item">No recent activity</div>
          )}
        </div>
        <button
          type=" button"
          className="btn btn-outline-secondary btn-sm add-commment-btn"
          onClick={this.toggleModal}
        >
          Add Comment
        </button>
        {this.state.toggle === true && (
          <CommentForm
            postId={this.props.id}
            idx={this.props.comments.length + 1}
            toggle={this.state.toggle}
            closedModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

CommentsList.propTypes = {
  fetchCommentsById: PropTypes.func.isRequired
  // comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.items
});

export default connect(mapStateToProps, { fetchCommentsById })(CommentsList);
