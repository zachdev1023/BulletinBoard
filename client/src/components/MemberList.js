import React, { Component } from "react";
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
import { v1 as uuid } from "uuid";

export class MemberList extends Component {
  state = {
    posts: [
      {
        id: uuid(),
        title: "Title 1",
      },
      {
        id: uuid(),
        title: "Title 2",
      },
      {
        id: uuid(),
        title: "Title 3",
      },
      {
        id: uuid(),
        title: "Title 4",
      },
    ],
  };

  render() {
    console.log(this.state.posts);

    return this.state.posts.length < 1 ? (
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <ListGroup>
          <Button
            dark="true"
            className="dark mb-5"
            onClick={() => {
              const post = prompt("New Post");
              if (post) {
                this.setState((state) => ({
                  posts: [{ id: uuid(), title: post }, ...state.posts],
                }));
              }
            }}
          >
            New Post
          </Button>
          <h3 style={{ textAlign: "center" }}>Nothing Posted</h3>
        </ListGroup>
      </Container>
    ) : (
      <div>
        <Container>
          <div
            className="mb-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              dark="true"
              className="dark"
              onClick={() => {
                const post = prompt("New Post");
                if (post) {
                  this.setState((state) => ({
                    posts: [{ id: uuid(), title: post }, ...state.posts],
                  }));
                }
              }}
            >
              New Post
            </Button>
          </div>
          {this.state.posts.map(({ id, title }) => (
            <div key={uuid()}>
              <Card className="mb-5">
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card Subtitle
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti, cumque?
                  </CardText>
                  <Button
                    style={{ float: "right" }}
                    onClick={() => {
                      this.setState((state) => ({
                        posts: state.posts.filter((post) => post.id !== id),
                      }));
                    }}
                    key={id}
                    className="btn-danger btn-sm"
                  >
                    Remove Post
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default MemberList;
