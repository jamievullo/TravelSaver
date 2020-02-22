import React from 'react'
import FlightForm from './FlightForm';
import CarRentalForm from './CarRentalForm'
import HotelForm from './HotelForm'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import Hotels from '../pages/Hotels'

export default class SearchNavbar extends React.Component {
    constructor(props) {
        super()
    
        this.state = {        
        // Takes active tab from props
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
        )
    }
}
