import React from 'react'
import Sidebar from '../directives/sidebar'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Form } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Metrics = () => {
    return (
        <>
            <Sidebar />
            <div className='page-wrapper'>
                <div className="restaurant-panel-content">
                    <Container>
                        <div className='main-heading'>
                            <h2>The Metrics</h2>
                        </div>
                        <Row>

                            <Col lg={12}>
                                <div className="customer-table">

                                    <Table responsive>

                                        <thead>
                                            <tr>
                                                <th >Metrics Name</th>
                                                <th >Created</th>

                                                <th >Metrics Type</th>

                                                <th><i class="fa fa-ellipsis-v" aria-hidden="true"></i></th>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown button
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </tr>
                                        </thead>
                                        <tbody>





                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Metrics