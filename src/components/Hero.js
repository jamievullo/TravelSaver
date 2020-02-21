import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchNavbar from './SearchNavbar'

export default function Hero() {
    
   return (
      <Jumbotron className="hero bg-transparent jumbotron-fluid p-0">
         {/* padding on bottom for display of form submit on smaller screens */}
         <Container fluid={true}>
               <Row className="justify-content-center py-0" >
                  <Col id="search-box" md={6} sm={12}>                
                     {/* <SocialMediaIcons /> */}
                     <SearchNavbar activeTab={1}/>
                  </Col>
               </Row>
         </Container>
      </Jumbotron>
   )
}


