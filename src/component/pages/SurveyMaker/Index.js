import React, { useState } from "react";
import Sidebar from "../../directives/sidebar";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../../../assets/css/popup.css";
import Badge from "react-bootstrap/Badge";

function Index() {
  const name = "Survey";
  const [showEditPopup, setShowEditPopup] = useState(false);
  const firstLetter = name.charAt(0).toUpperCase();
  const handleEditClick = () => {
    setShowEditPopup(true);
  };
  const cardStyle = {
    display: "inline-block",
    // wordWrap: "break-word",
    border: "1px solid #ccc",
    // padding: "5px",
  };
  const handleUpdateClick = () => {
    // Perform the update action
    // ...
  };

  const handleDeleteClick = () => {
    // Perform the delete action
    // ...
  };
  const handleStatusClick = () => {
    // Perform the status change action
    // ...
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

            <div className="button-container">
              <Link to="/response">
                {" "}
                <Button variant="dark" style={{ color: "white" }}>
                  create new survey
                </Button>
              </Link>
            </div>

            <Row>
              <Col lg={12}>
                <div className="customer-table">
                  <Table style={{ border: "none" }}>
                    <thead>
                      <tr style={{ border: "none" }}>
                        <th style={{ border: "none", fontSize: "18px" }}>
                          Surveys{" "}
                        </th>
                        <th style={{ border: "none" }}>Status</th>
                        <th style={{ border: "none" }}>Location</th>
                        <th style={{ border: "none" }}>Last Sent</th>
                        <th style={{ border: "none" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ border: "none" }}>
                        <td style={{ border: "none" }}>
                          <div className="icon">
                            <Badge pill bg="success">
                              {firstLetter}
                            </Badge>

                            <span className="text">survey_AE</span>
                          </div>
                          <div>2 days ago</div>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>Not Sent</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <Card style={cardStyle}>
                            <Card.Body>Global</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>02/08/2023</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <DropdownButton
                            id="edit-dropdown"
                            variant="link"
                            title={
                              <BsThreeDotsVertical style={{ color: "black" }} />
                            }
                            align="end"
                          >
                            <Dropdown.Item onClick={handleEditClick}>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleUpdateClick}>
                              Update
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleDeleteClick}>
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleStatusClick}>
                              Change Status
                            </Dropdown.Item>
                            {/* Add more actions as needed */}
                            {showEditPopup && (
                              <div className="edit-popup">
                                <Form>
                                  {/* Edit popup content */}
                                  {/* Add form fields or any other content you want */}
                                </Form>
                              </div>
                            )}
                          </DropdownButton>
                        </td>
                      </tr>
                      <tr style={{ border: "none" }}>
                        <td style={{ border: "none" }}>
                          <div className="icon">
                            <Badge pill bg="success">
                              {firstLetter}
                            </Badge>

                            <span className="text">survey_AE</span>
                          </div>
                          <div>2 days ago</div>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>Not Sent</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <Card style={cardStyle}>
                            <Card.Body>Global</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>02/08/2023</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <DropdownButton
                            id="edit-dropdown"
                            variant="link"
                            title={
                              <BsThreeDotsVertical style={{ color: "black" }} />
                            }
                            align="end"
                          >
                            <Dropdown.Item onClick={handleEditClick}>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleUpdateClick}>
                              Update
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleDeleteClick}>
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleStatusClick}>
                              Change Status
                            </Dropdown.Item>
                            {/* Add more actions as needed */}
                            {showEditPopup && (
                              <div className="edit-popup">
                                <Form>
                                  {/* Edit popup content */}
                                  {/* Add form fields or any other content you want */}
                                </Form>
                              </div>
                            )}
                          </DropdownButton>
                        </td>
                      </tr>
                      <tr style={{ border: "none" }}>
                        <td style={{ border: "none" }}>
                          <div className="icon">
                            <Badge pill bg="success">
                              {firstLetter}
                            </Badge>

                            <span className="text">survey_AE</span>
                          </div>
                          <div>2 days ago</div>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>Not Sent</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <Card style={cardStyle}>
                            <Card.Body>Global</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          <Card style={cardStyle}>
                            <Card.Body>02/08/2023</Card.Body>
                          </Card>
                        </td>
                        <td style={{ border: "none" }}>
                          {" "}
                          <DropdownButton
                            id="edit-dropdown"
                            variant="link"
                            title={
                              <BsThreeDotsVertical style={{ color: "black" }} />
                            }
                            align="end"
                          >
                            <Dropdown.Item onClick={handleEditClick}>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleUpdateClick}>
                              Update
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleDeleteClick}>
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleStatusClick}>
                              Change Status
                            </Dropdown.Item>
                            {/* Add more actions as needed */}
                            {showEditPopup && (
                              <div className="edit-popup">
                                <Form>
                                  {/* Edit popup content */}
                                  {/* Add form fields or any other content you want */}
                                </Form>
                              </div>
                            )}
                          </DropdownButton>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Index;
