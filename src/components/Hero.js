import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchNavbar from './SearchNavbar'

export default function Hero() {
    
   return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
         <Container fluid={true}>
               <Row className="justify-content-center py-0" >
                  <Col id="search-box" md="auto" xs={6}>                
                     {/* <SocialMediaIcons /> */}
                     <SearchNavbar activeTab={1}/> {/* sets tab selected on load */}
                  </Col>
               </Row>
         </Container>
      </Jumbotron>
   )
}


