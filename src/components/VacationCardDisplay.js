import React from 'react'

import DestinationCard from '../components/DestinationCard'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import plans from '../assets/images/Plans.png'
import weekend from '../assets/images/Weekend.png'
import paris from '../assets/images/Paris.png'
import mountains from '../assets/images/MountainsTravel.png'
import tropical from '../assets/images/Tropical2.png'
import adventure from'../assets/images/Adventure.png'

export default class VacationCardDisplay extends React.Component {
    constructor() {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Popular Destinations',
                    subTitle: '',
                    imgSrc: paris,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Vacation Packages',
                    subTitle: '',
                    imgSrc: plans,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weekend Getaways',
                    subTitle: '',
                    imgSrc: weekend,
                    link: '',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Explore',
                    subTitle: '',
                    imgSrc: mountains,
                    link: '',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Tropical',
                    subTitle: '',
                    imgSrc: tropical,
                    link: '',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Adventure',
                    subTitle: '',
                    imgSrc: adventure,
                    link: '',
                    selected: false
                },
            ]
        }
    }

    // handleCardClick = (id, card) => {
    //     let items = [...this.state.items];

    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item => {
    //         if(item.id !== id) {
    //             item.selected = false;
    //         }
    //     })

    //     this.setState({
    //         items
    //     })
    // }

    makeItems = (items) => {
        return items.map(item => {
            return <DestinationCard item={item} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center">                        
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}