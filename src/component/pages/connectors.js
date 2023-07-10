import React from 'react'
import Sidebar from '../directives/sidebar'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import image1 from '../../assets/images/image 3.png'
import image2 from '../../assets/images/mixpanel-seeklogo.com 1 (1).png'
import image3 from '../../assets/images/hubspot-seeklogo.com 1.png'
import image4 from '../../assets/images/salesforca-seeklogo.com 1.png'
import image5 from '../../assets/images/image-removebg-preview 1.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Connectors = () => {
    const [connect, setConnects] = useState([])
    useEffect(() => {
        allConnectors();
    }, [])
    const allConnectors = () => {
        fetch(`http://sahadev.techpanda.art/connector/`)
            .then((res) => res.json())
            .then((responsive) => {
                console.log(responsive);
                setConnects(responsive)
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    return (
        <>
            <Sidebar />
            <div className='page-wrapper'>
                <div className="restaurant-panel-content">
                    <Container>
                        <div className='main-heading'>
                            <h2>Connectors</h2>
                        </div>
                        <Row>
                            {connect.map((items, index) => (
                              
                                <Col lg={6} sm={6} className='mt-4 mb-3' key={index}>
                                    <div className='imagecard'>
                                    <Link to='/hubsport'>
                                        <img src={"http://sahadev.techpanda.art"+items.connector_image} alt="..." />
                                        <h3 className='namecolor'>{items.connector_name}</h3>

                                    </Link>
                                    </div>
                                </Col>
                            ))}

                        </Row>
                    </Container>
                </div>
            </div>
        </>)
}

export default Connectors