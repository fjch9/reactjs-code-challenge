import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createComment } from "../../redux/actions/commentsActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: props.toggle,
      title: "",
      email: "",
      body: ""
    };

    console.log(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      email: this.state.email,
      body: this.state.body
    };

    console.log("pushed", post);

    // this.props.createPost(post);
  }

  render() {
    return (
      <Modal isOpen={this.state.toggle} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
        <form onSubmit={this.onSubmit}>
          <ModalBody>
            <div className="form-group">
              <label> Title: </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                required
              />
            </div>
            <div className="form-group">
              <label> Email: </label>
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                required
              />
            </div>
            <div className="form-group">
              <label> Body: </label>
              <br />
              <textarea
                className="form-control"
                name="body"
                onChange={this.onChange}
                value={this.state.body}
                required
              />
            </div>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleModal}>Cancel</Button>
            <Button type="submit" color="info">
              Send
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments.items
});

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { createComment })(CommentForm);
