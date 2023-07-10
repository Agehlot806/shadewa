import React from "react";
import Sidebar from "../../directives/sidebar";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Index() {
  const cardStyle = {
    width: "600px",
    margin: "0px 145px 0px", // Adjust the multiplier as needed for desired width
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
            <Card style={cardStyle}>
              <Card.Body>0 Response</Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Index;
