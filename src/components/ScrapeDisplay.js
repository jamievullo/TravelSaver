import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ScrapeDisplay(props) {
    return (
        <div style={{marginBottom: "2.5em"}}>
            <div className="justify-content-center" >
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={3}>
                            <img src={props.destinations.photo.images.medium.url} className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title>
                                {props.destinations.title}
                            </Card.Title>
                            <Card.Text>{props.destinations.description}</Card.Text>
                            {/* <Card.Text>Rating: {props.hotel.rating}</Card.Text>                                                   */}
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}
