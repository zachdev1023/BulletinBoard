import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
} from "reactstrap";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <Card className="mb-5">
          <CardBody>
            <CardTitle className="mt-3" tag="h5">
              a
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              b
            </CardSubtitle>
            <CardText className="mt-3">c</CardText>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </div>
    );
  }
}

export default Sidebar;
