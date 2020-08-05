import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../../../src/redux/actions/commentsActions";
import Comment from "./Comment";
import { Modal } from "reactstrap";
import CommentForm from "./CommentForm";
class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentWillMount() {
    this.props.fetchComments({ id: this.props.id });
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
          {/* {this.props.comments.length > 0 &&
          this.props.comments.map((comment, idx) => (
            <Comment key={idx} comment={comment} />
          ))} */}
          {this.props.comments.length === 0 && (
            <div className="list-group-item">No recent activity</div>
          )}
          <div className="list-group-item">No recent activity</div>
        </div>
        <button
          type=" button"
          className="btn btn-outline-secondary btn-sm add-commment-btn"
          onClick={this.toggleModal}
        >
          Add Comment
        </button>
        {/* <Modal isOpen={this.state.toggle} toggle={this.toggleModal}> */}
        {this.state.toggle === true && (
          <CommentForm toggle={this.state.toggle} />
        )}
        {/* </Modal> */}
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
