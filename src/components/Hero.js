import React from 'react'
// import HeroFlightForm from './HeroFlightForm'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchNavbar from './SearchNavbar'

export default function Hero() {
    
    return (
        <Jumbotron className="hero bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} style={{paddingBottom: "6em"}}>
                <Row className="justify-content-center py-0" >
                    <Col id="search-box" md={5} sm={12}>                
                        {/* <SocialMediaIcons /> */}
                        <SearchNavbar activeTab={1}/>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}


