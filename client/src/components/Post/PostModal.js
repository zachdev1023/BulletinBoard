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

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.previewSource) return;
    this.uploadImage(this.state.previewSource);
  };

  uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="mx-4">
        <Button className="mb-5" dark="true" onClick={this.toggle}>
          New Post
        </Button>
        <Modal toggle={this.toggle} isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>New Post</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Container>
                  {this.state.previewSource && (
                    <img
                      src={this.state.previewSource}
                      alt="choosenImage"
                      style={{ height: "150px" }}
                    />
                  )}
                </Container>
                <InputGroup>
                  <Input
                    name="Image"
                    type="file"
                    onChange={this.handleFileInputChange}
                    value={this.fileInputState}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    className="btn btn-primary"
                    dark="true"
                    type="Submit"
                    defaultValue="Upload"
                  />
                </InputGroup>
              </FormGroup>
            </Form>
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
