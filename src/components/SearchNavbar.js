import React from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const [key, setKey] = useState('home');
import FlightForm from './FlightForm';
import CarRentalForm from './CarRentalForm'
import HotelForm from './HotelForm'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class SearchNavbar extends React.Component {
    constructor(props) {
        super()
    

        this.state = {        
        // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1        
        }
    }

    handleSelect = (selectedTab) => {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }


    render() {
        return (
        // <Router>
        <Tabs id="hero-tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={1} title="Flights">
                <FlightForm />
            </Tab>
            <Tab eventKey={2} title="Hotels">
                <HotelForm />
            </Tab>
            <Tab eventKey={3} title="Car Rental">
                <CarRentalForm />
            </Tab>
        </Tabs>
        // </Router>
        )
    }
}
