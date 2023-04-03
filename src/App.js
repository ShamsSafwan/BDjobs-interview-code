import React, { Component } from "react"
import { Navbar, Nav } from 'react-bootstrap';


import "./App.css"


class App extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand className="mx-auto pl-40 " href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default App
