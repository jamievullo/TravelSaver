import React from 'react'
import DestinationCard from '../components/DestinationCard'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class VacationCardDisplay extends React.Component {
    constructor() {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Popular Destinations',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241333/Paris_ms9qjv.png',
                    link: '/popular_destinations',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Family Vacations',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241429/Plans_ravrft.png',
                    link: '/family_vacations',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weekend Getaways',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241270/Weekend_gwbpr0.png',
                    link: '/weekend_getaways',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Explore',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241530/MountainsTravel_bgymt9.png',
                    link: '/explore',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Not Your Average',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583838458/Observe_v3iglr.png',
                    link: '/not_your_average',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Adventure',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241393/Adventure_aptvwt.png',
                    link: '/adventure',
                    selected: false
                },
            ]
        }
    }

    //iterates over items array and sets props for each card
    makeItems = (items) => {
        return items.map(item => {
            return <DestinationCard item={item} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true} style={{paddingBottom: "4em"}} onClick={this.handleCardClick}>
                    <Row className="justify-content-center"> 
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}