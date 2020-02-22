import React from 'react'

import DestinationCard from '../components/DestinationCard'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import ocean from '../assets/images/Ocean.png'

export default class VacationCardDisplay extends React.Component {
    constructor(props) {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Popular Destinations',
                    subTitle: '',
                    imgSrc: ocean,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Vacation Packages',
                    subTitle: '',
                    imgSrc: ocean,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weekend Getaways',
                    subTitle: '',
                    imgSrc: ocean,
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
                <Container fluid={true}>
                    <Row className="justify-content-center">                        
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}