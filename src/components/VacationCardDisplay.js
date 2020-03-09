import React from 'react'

import DestinationCard from '../components/DestinationCard'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// import plans from '../assets/images/Plans.png'
// import weekend from '../assets/images/Weekend.png'
// import paris from '../assets/images/Paris.png'
// import mountains from '../assets/images/MountainsTravel.png'
// import tropical from '../assets/images/Tropical2.png'
// import adventure from'../assets/images/Adventure.png'

export default class VacationCardDisplay extends React.Component {
    constructor() {
        super()
        //sets state of vac card item array titles, links, images, and selected status for display
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
                    title: 'Vacation Packages',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241429/Plans_ravrft.png',
                    link: '',
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
                    title: 'Tropical',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241459/Tropical2_wxbkeu.png',
                    link: '',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Adventure',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1583241393/Adventure_aptvwt.png',
                    link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
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
                        {/* on render "makes" cards for each vacation card item */}
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}