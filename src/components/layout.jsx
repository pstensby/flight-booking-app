import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "./navbar";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Navbar />
      </Container>
    );
  }
}

export default Layout;
