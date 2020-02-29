import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap'

export default function HotelResultsDisplay(props) {

    const amenitiesFun = (props) => {
        let amenities = props.hotel.amenities
        return amenities.slice(0,9).map(amenity => `${amenity.name}, `)

    }

    return (
        <div>
            <div className="justify-content-center" >
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={3}>
                            <img src={props.hotel.photo.images.medium.url} className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title>
                                {props.hotel.name}
                                <Card.Text>
                                    {props.hotel.address}
                                </Card.Text>
                            </Card.Title>
                            <Card.Text>Price Range: {props.hotel.price}</Card.Text>
                            <Card.Text>Rating: {props.hotel.rating}</Card.Text>                            
                            <Card.Text>
                                Amenities: {amenitiesFun(props)}
                            </Card.Text>
                            <Card.Text as="h6">Click Here to Book Now: <a href={props.hotel.website} target="_blank" rel="noopener noreferrer">{props.hotel.name}</a></Card.Text>                       
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}
