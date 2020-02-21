import React from 'react'

import Card from '../components/Card'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default class VacationCard extends React.Component {
    constructor(props) {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: '',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },
                {
                    id: 1,
                    title: '',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },
                {
                    id: 2,
                    title: '',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
                    selected: false
                },
                {
                    id: 3,
                    title: '',
                    subTitle: '',
                    imgSrc: '',
                    link: '',
                    gitLink: '',
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

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}