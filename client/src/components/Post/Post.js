import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "./PostActions";
import PostModal from "./PostModal";
import Sidebar from "../Sidebar";
import PostEditModal from "./PostEditModal";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Swal from "sweetalert2";

import { FaTrash } from "react-icons/fa";

import {
  Container,
  ListGroup,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export class Post extends Component {
  constructor(props) {
    //need super to call the parent's class constructor
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getPosts();
  };

  deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deletePost(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  render() {
    const { posts } = this.props.post;
    return (
      <Container className="col-12 col-md-4 offset-md-4  mx-0 px-0 mx-md-auto px-md-auto">
        <ListGroup>
          <TransitionGroup>
            {posts.map(({ _id, title, subtitle, post, imgURL }) => (
              <CSSTransition key={_id} timeout={777} classNames="fade">
                <Container className="mx-0 px-0">
                  <Card className="mb-3">
                    <CardBody className="p-0">
                      {imgURL ? (
                        <img
                          className="p-0 m-0"
                          alt={title}
                          src={imgURL}
                          style={{ width: "100%" }}
                          crop="scale"
                        />
                      ) : (
                        <></>
                      )}
                      <div className="px-3 py-1">
                        <div className="mb-5 px-0  mx-0 mx-md-2">
                          <CardTitle className="mt-3" tag="h5">
                            {title}
                          </CardTitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {subtitle}
                          </CardSubtitle>
                          <CardText className="my-3">{post}</CardText>
                        </div>
                      </div>
                      <Container
                        className="border-top px-1"
                        style={{
                          display: "flex",
                          justifyContent: "right",
                          background: "#00000005",
                        }}
                      >
                        <div
                          className="btn-input"
                          style={{ backgroundColor: "transparent" }}
                        >
                          {/* <PostEditModal /> */}
                        </div>
                        <Button
                          className="btn-input"
                          onClick={this.deletePost.bind(this, _id)}
                          style={{ backgroundColor: "transparent" }}
                        >
                          <FaTrash />
                        </Button>
                      </Container>
                    </CardBody>
                  </Card>
                </Container>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { getPosts, deletePost })(Post);
