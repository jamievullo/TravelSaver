import React from 'react'
import FlightForm from './FlightForm';
import CarRentalForm from './CarRentalForm'
import HotelForm from './HotelForm'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import plane from '../assets/images/PlaneTab2.png'
import hotel from '../assets/images/HotelTab.png'
import rentalcar from '../assets/images/RentalTab.png'

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
        const planeTab = <img src={plane} style={{height: "40p", width: "50px"}} alt=""/>
        const hotelTab = <img src={hotel} style={{height: "40p", width: "50px"}} alt=""/>
        const rentalTab = <img src={rentalcar} style={{height: "40p", width: "50px"}} alt=""/>
        return (
        <Tabs id="hero-tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={1} title={planeTab}>
                <FlightForm />
            </Tab>
            <Tab eventKey={2} title={hotelTab}>
                <HotelForm />
            </Tab>
            <Tab eventKey={3} title={rentalTab}>
                <CarRentalForm />
            </Tab>
        </Tabs>
        )
    }
}
