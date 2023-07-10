import React,{ useState } from "react";
import Sidebar from "../../directives/sidebar";
import { Form } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function response() {
  const [inputValue, setInputValue] =useS

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="restaurant-panel-content">
          <Container>
            <div className="main-heading">
              <h2>Survey Maker</h2>
            </div>

            <Row>
              <Col lg={12}>
                <Form>
                  <Form.Group controlId="formInput">
                    <Form.Label>Input Field</Form.Label>
                    <Form.Control
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default response;
