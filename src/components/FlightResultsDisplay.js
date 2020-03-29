import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ts from '../assets/images/travelsaver2.png'
import moment from 'moment';

export default function FlightResultsDisplay(props) {

    function dateFormat(date) {
        let unformattedDate = moment(date, 'YYYY-MM-DDTHH:mm:ss.sss')
        // let formattedDate = unformattedDate.format('MM-DD-YYYY [Time:] hh:mm a')
        let formattedDate = unformattedDate.format('LLLL')
        return formattedDate
    }

    return (
        <div>
            <div className="justify-content-center" >
                <Card style={{marginBottom: '1em'}}>
                    <Row className="no-gutters" style={{position: "center", width: "100%", paddingBottom: "1em"}}>
                        <Col className="auto" md={4} style={{paddingRight: "1em"}}>
                            <img src={ts} className="img-fluid" alt=""/>
                        </Col>
                        <Col>                       
                            <Card.Title style={{fontSize: '1.6em'}}>
                                {props.flight.flyFrom}-- 
                                {props.flight.cityFrom} ==>
                                {props.flight.flyTo}--  
                                {props.flight.cityTo}                                
                            <Card.Text>Price: ${props.flight.price}</Card.Text>
                            </Card.Title>
                            {/* trying to conditionally render default props if not present in response */}
                            {props.flight.local_departure && <Card.Text>Departure: {dateFormat(props.flight.local_departure)}</Card.Text>} 
                            {props.flight.local_arrival && <Card.Text>Arrival: {dateFormat(props.flight.local_arrival)}</Card.Text>}                                                        
                            <Card.Text as="h6">Click Here to Book Now: <a href={props.flight.deep_link} target="_blank" rel="noopener noreferrer">${props.flight.price}</a></Card.Text>                       
                        </Col>
                    </Row>    
                </Card>
            </div> 
        </div>
    )
}