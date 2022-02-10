import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "./PostActions";
import PostModal from "./PostModal";
import Sidebar from "../Sidebar";
import PostEditModal from "./PostEditModal";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    this.props.deletePost(id);
  };

  render() {
    const { posts } = this.props.post;
    return (
      <div className="row">
        <Container className="col-12 col-sm-4 offset-sm-3 order-last order-md-first ">
          <ListGroup>
            <TransitionGroup>
              {posts.map(({ _id, title, subtitle, post, imgURL }) => (
                <CSSTransition key={_id} timeout={777} classNames="fade">
                  <Container>
                    <Card className="mb-5">
                      <CardBody style={{ padding: "2em" }}>
                        {imgURL ? (
                          <img
                            alt={title}
                            src={imgURL}
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <></>
                        )}

                        <CardTitle className="mt-3" tag="h5">
                          {title}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {subtitle}
                        </CardSubtitle>
                        <CardText className="mt-3">{post}</CardText>
                        <Container
                          style={{ display: "flex", justifyContent: "right" }}
                        >
                          <div
                            className="btn-input"
                            style={{ backgroundColor: "transparent" }}
                          >
                            <PostEditModal />
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

        <Container className=" col-12 px-5 px-sm-0 col-sm-2 order-md-last order-first ">
          <PostModal />
          <Sidebar />
        </Container>
      </div>
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
