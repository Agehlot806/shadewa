import React from "react";
import Sidebar from "../../directives/sidebar";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function Response1() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="page-wrapper">
          <div className="restaurant-panel-content">
            <Container>
              <div className="main-heading">
                <h2>Survey Maker</h2>
              </div>
              <Card>
                <Card.Body>0 Response</Card.Body>
              </Card>
            </Container>
          </div>
        </div>
        Response1
      </div>
      ;
    </>
  );
}

export default Response1;
