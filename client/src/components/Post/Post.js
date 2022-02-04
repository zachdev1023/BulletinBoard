import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, deletePost } from "./PostActions";
import PostModal from "./PostModal";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <Container>
        <PostModal />
        <ListGroup>
          <TransitionGroup>
            {posts.map(({ _id, title, subtitle, post }) => (
              <CSSTransition key={_id} timeout={777} classNames="fade">
                <Container>
                  <Card className="mb-5">
                    <CardBody>
                      <CardTitle tag="h5">{title}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {subtitle}
                      </CardSubtitle>
                      <CardText>{post}</CardText>
                      <Button
                        style={{ float: "right" }}
                        onClick={this.deletePost.bind(this, _id)}
                        className="btn-danger btn-sm"
                      >
                        Remove Post
                      </Button>
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