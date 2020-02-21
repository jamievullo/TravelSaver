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
                    title: 'Moonlight',
                    subTitle: 'JavaScript SPA/Rails API',
                    imgSrc: moonlight,
                    link: 'https://projectmoonlight.herokuapp.com/',
                    gitLink: 'https://github.com/jamievullo/Moonlight',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Tag Sale',
                    subTitle: 'Ruby on Rails, Active Record, SQL',
                    imgSrc: tagsale,
                    link: 'https://github.com/jamievullo/Tag-Sale',
                    gitLink: 'https://github.com/jamievullo/Tag-Sale',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Rubiks Time Tracker',
                    subTitle: 'Sinatra, HTML, CSS, OOP, MVC',
                    imgSrc: rubikstimetracker,
                    link: 'https://github.com/jamievullo/Rubiks_Time_Tracker',
                    gitLink: 'https://github.com/jamievullo/Rubiks_Time_Tracker',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weather Hack',
                    subTitle: 'JavaScript SPA, API Integration',
                    imgSrc: weatherapp,
                    link: 'https://github.com/jamievullo/WeatherApp',
                    gitLink: 'https://github.com/jamievullo/WeatherApp',
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