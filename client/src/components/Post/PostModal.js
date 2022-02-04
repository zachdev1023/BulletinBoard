import React, { Component } from "react";
import { addPost } from "./PostActions";
import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  Input,
} from "reactstrap";

export class PostModal extends Component {
  state = {
    id: "",
    modal: false,
    title: "",
    subtitle: "",
    post: "",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  subtitleChange = (e) => {
    this.setState({ subtitle: e.target.value });
  };

  postChange = (e) => {
    this.setState({ post: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      post: this.state.post,
    };
    this.props.addPost(newPost);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button className="mb-5" dark="true" onClick={this.toggle}>
          New Post
        </Button>
        <Modal toggle={this.toggle} isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>New Post</ModalHeader>
          <ModalBody>
            <InputGroup className="mb-3">
              <Input
                name="Title"
                onChange={this.titleChange}
                type="textarea"
                rows="1"
                placeholder="Title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Input
                name="Subtitle"
                onChange={this.subtitleChange}
                type="textarea"
                rows="3"
                placeholder="Subtitle"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Input
                name="Post"
                onChange={this.postChange}
                type="textarea"
                rows="5"
                placeholder="Post"
              />
            </InputGroup>
            <InputGroup>
              <Button
                block
                className="mb-5"
                dark="true"
                onClick={this.onSubmit}
              >
                Post
              </Button>
            </InputGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { addPost })(PostModal);
