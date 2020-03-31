import React from 'react'
import Row from 'react-bootstrap/Row';
import FlightResultsDisplay from '../components/FlightResultsDisplay'
import MyFlightLoader from '../components/MyFlightLoader';
// const api_key = process.env.REACT_APP_API_TEQUILA_KEY

// console.log(process.env)
export default class Flights extends React.Component {
    constructor(props) {
        super(props)
        // pulling props and setting state from flight form for fetch 
        // from flightInfo state redirect element in form render
        const { departing, 
            returning, 
            flyingFrom, 
            flyingTo, 
            adults, 
            children } = this.props.location.state.flightInfo
        this.state = {
            //do not need these variables in state because passing in props and state never changes
            departing,
            returning,
            flyingFrom,
            flyingTo,
            adults,
            children,            
            isLoading: true,
            flights: [],
        }
        console.log(this.state)
    }

    //takes in date from form, makes it an integer, then rejoins it in format necessary for fetch
    dateFormatter = date => {
        const index = [2, 1, 0]
        const newDate = date.split('-').map(i => {
            const day = parseInt(i)
            const newDay = (day < 10) ? (0 + "" + day) : day
            return newDay
        })
        return index.map(i => newDate[i]).join("/")
    }
    
    componentDidMount = () => {
        const outbound = this.dateFormatter(this.state.departing)
        const inbound = this.dateFormatter(this.state.returning)
        const origin = this.state.flyingFrom
        const destination = this.state.flyingTo
        console.log(outbound, inbound, origin, destination)

        fetch(`https://kiwicom-prod.apigee.net/v2/search?fly_from=${origin}&fly_to=${destination}&dateFrom=${outbound}&dateTo=${outbound}&returnFrom=${inbound}&curr=USD`, {
        // fetch("https://kiwicom-prod.apigee.net/v2/search?fly_from=AVP&fly_to=PHX&dateFrom=08/05/2020&dateTo=08/05/2020&returnFrom=12/05/2020&flightType=round&curr=USD", {
            "method": "GET",
            "headers": {
            
            "apikey": 'tmTNzOHgvDomyVGeaF6Ucf4fsAQmefX5'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            let allFlights = data.data
            this.setState({
                isLoading: false,
                flights: [...allFlights]
            })
            return null
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    render() {
        // console.log(this.props)    
        if (this.state.isLoading === true) {
            return (
            <div> 
                <MyFlightLoader />
                <MyFlightLoader />
                <MyFlightLoader />
                <MyFlightLoader />
            </div>  
            )      
        } else { 
            return (
                <div> 
                <center><h3>Flight Search Results</h3></center>
                    <div style={{margin: "0 auto", width:"85%"}}>                
                        <Row className="justify-content-center" >
                            {this.state.flights.map((flight, i) => <FlightResultsDisplay key={i} flight={flight} />)}                            
                        </Row>                
                    </div>
                </div>
            )
        }        
    }
}