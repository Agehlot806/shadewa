import React from 'react'
import Sidebar from '../directives/sidebar'
import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Salesfoureadd = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[token,setToken]=useState("")
    const[instance,setInstance]=useState("")
    const[reportid,setReportid]=useState("")
    const[exports,setExport]=useState("")
    const UpdateEventDetail = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('token', token);
        formData.append('instance', instance);
        formData.append('ReportID', reportid);
        formData.append('Export', exports);
        axios
            .post(`http://sahadev.techpanda.art/salesforcesconnector/`, formData, {
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
                            <h2>Sales force</h2>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <form onSubmit={UpdateEventDetail}>
                                    <div class="form-group">

                                        <input type="text"  class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} aria-describedby="emailHelp" placeholder="salesforce username" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="salesforce Password" />
                                    </div>
                                    <div class="form-group">

                                        <input type="text" class="form-control" value={token} onChange={(e)=>setToken(e.target.value)} aria-describedby="emailHelp" placeholder="security token" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" value={instance} onChange={(e)=>setInstance(e.target.value)} placeholder="salesforce instance" />
                                    </div>
                                    <div class="form-group">

                                        <input type="text" class="form-control" value={reportid} onChange={(e)=>setReportid(e.target.value)} aria-describedby="emailHelp" placeholder="Report id" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" value={exports} onChange={(e)=>setExport(e.target.value)} class="form-control" placeholder="export" />
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

export default Salesfoureadd