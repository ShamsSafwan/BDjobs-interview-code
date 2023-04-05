import React, { Component } from "react"

import { Form } from 'react-bootstrap';

import "./App.css"


class App extends Component {
  render() {
    return (
      <Form className="mx-auto" style={{ maxWidth: '80vw' }} >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Large Text Area</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>  
    </Form>
    )
  }
}

export default App
