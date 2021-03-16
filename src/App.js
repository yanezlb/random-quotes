import React from 'react';
import {Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Quote from './components/Quote/Quote';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            1 of 3
          </Col>
          <Col md="auto">
            <Quote text="Hla"></Quote>
          </Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;