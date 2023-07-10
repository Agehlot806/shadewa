import React from 'react'
import Sidebar from '../directives/sidebar'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
const Hubsportc = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const UpdateEventDetail = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('api_link', username);
        formData.append('api_token', password);
        axios
            .post(`http://sahadev.techpanda.art/hubspotconnector/`, formData, {
                headers: { "Content-Type": "multipart/form-data" },

            })
            .then((response) => {
                console.log(response);
                // toast.success(" Events Updated Successfully")
                // history.push("/all-events");mmit 
            })
            .catch((error) => {
                console.log(error);

            });
    };
    return (
        <>
            <Sidebar />
            <div className='page-wrapper'>
                <div className="restaurant-panel-content">
                    <Container>
                        <div className='main-heading'>
                            <h2>Hubsport</h2>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <form onSubmit={UpdateEventDetail}>
                                    <div class="form-group">

                                        <input type="text" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" placeholder="salesforce username" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="salesforce Password" />
                                    </div>


                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Hubsportc