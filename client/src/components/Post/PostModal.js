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
  Form,
  FormGroup,
  Container,
} from "reactstrap";

import { FaPlusCircle } from "react-icons/fa";

export class PostModal extends Component {
  state = {
    id: "",
    modal: false,
    title: "",
    subtitle: "",
    post: "",
    fileInputState: "",
    selectedFile: "",
    previewSource: "",
  };

  handleFileInputChange = (e) => {
    const file = e.target.files[0];
    this.previewFile(file);
  };

  previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ previewSource: reader.result });
    };
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
      imgURL: this.state.previewSource,
    };
    this.props.addPost(newPost);
    this.toggle();
  };

  render() {
    return (
      <>
        {/* modal trigger */}
        <FaPlusCircle className="faIcon" onClick={this.toggle} />

        {/* modal */}
        <Modal toggle={this.toggle} isOpen={this.state.modal}>
          <ModalHeader
            style={{ background: "#056674", color: "white" }}
            className="pacificoFont"
            toggle={this.toggle}
          >
            Humati..
          </ModalHeader>
          <ModalBody className="p-0 m-0">
            <Container className="p-0 m-0">
              {this.state.previewSource && (
                <img
                  src={this.state.previewSource}
                  alt="choosenImage"
                  style={{ width: "100%" }}
                />
              )}
            </Container>
            <div className="p-5">
              <InputGroup>
                <Input
                  className="mb-3"
                  name="Image"
                  accept="image/*"
                  type="file"
                  onChange={this.handleFileInputChange}
                  value={this.fileInputState}
                />
              </InputGroup>
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
            </div>

            <InputGroup>
              <Button
                block
                style={{ background: "#FF4B5C" }}
                className="m-0 p-3"
                onClick={this.onSubmit}
              >
                Post
              </Button>
            </InputGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { addPost })(PostModal);
