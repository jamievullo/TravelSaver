import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap'

export default function HotelResultsDisplay(props) {
    return (
        <div>
            <div className="justify-content-center" >
                {/* <h4>{props.item.name}</h4>
                <span>{props.item.address}</span>
                <span>{props.item.price}</span>
                <span>{props.item.rating}</span>
                gonna need a function to iterate over amenities object possibly component
                <span>{props.item.amenities}</span> 
                <a href={props.item.web_url} target="_blank" rel="noopener noreferrer"></a>
                <img className="hotel-photo-display" src={props.item.photo} alt={props.item.name} /> */}
                
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={3}>
                            <img src="//placehold.it/267" className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title>
                                Hotel Name
                                <Card.Text>
                                    706 West Taylor St., Taylor PA 18517
                                </Card.Text>
                            </Card.Title>
                            <Card.Text>Price Range: $115- $168</Card.Text>
                            <Card.Text>Rating: 5 star</Card.Text>                            
                            <Card.Text>
                                Amenities: Pool, Wifi, Free Breakfast, Bathrooms, TV, Coffee, Laundry Service
                            </Card.Text>                            
                            <Button style={{backgroundColor: "#212747"}}>Book Room</Button>                        
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}
