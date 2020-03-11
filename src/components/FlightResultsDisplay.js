import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FlightResultsDisplay(props) {

    // componentDidMount() {

    // }

    return (
        <div>
            <div className="justify-content-center" >
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={3}>
                            <img src="//placehold.it/267" className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title>
                                Flight Time?
                                <Card.Text>
                                    Flight Arrival
                                </Card.Text>
                            </Card.Title>
                            <Card.Text>Price Range:</Card.Text>
                            <Card.Text>Rating:</Card.Text>                            
                            <Card.Text>
                                Amenities: Stuffs, mile high club ticket punching
                            </Card.Text>
                            {/* <Card.Text as="h6">Click Here to Book Now: <a href={props.flight.website} target="_blank" rel="noopener noreferrer">{props.flight.name}</a></Card.Text>                        */}
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}