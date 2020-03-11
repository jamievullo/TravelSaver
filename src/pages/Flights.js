import React from 'react'
import Row from 'react-bootstrap/Row';
import FlighResultsDisplay from '../components/FlightResultsDisplay'
// import PaperAirplane from '../components/PaperAirplane';
// import moment from 'moment'

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Flights extends React.Component {
    constructor(props) {
        super(props)
        // pulling props and setting state from flight form for fetch 
        //from flightInfo state redirect object in form render
        const { departing, returning, flyingFrom, flyingTo, adults, children } = this.props.location.state.flightInfo
        this.state = {
            departing,
            returning,
            flyingFrom,
            flyingTo,
            adults,
            children,            
            isLoading: true,
            flights: [],
            sid: ""
        }
        // console.log(this.state)
    }

    dateFormatter = date => {
        const index = [2, 0, 1]
        const newDate = date.split('/').map(i => {
            const day = parseInt(i)
            const newDay = (day < 10) ? (0 + "" + day) : day
            return newDay
        })
        return index.map(i => newDate[i]).join("-")
    }

    componentDidMount = () => {

        this.setState({
            isLoading: false
        })
        // console.log(this.state.departing)
        const outbound = this.dateFormatter(this.state.departing)
        const inbound = this.dateFormatter(this.state.returning)
        const origin = this.state.flyingFrom
        const destination = this.state.flyingTo
        // console.log(outbound, inbound, origin, destination);
        // debugger
        fetch(`https://tripadvisor1.p.rapidapi.com/flights/create-session?dd2=${inbound}&currency=USD&o2=${destination}&d2=${origin}&ta=1&c=0&d1=${destination}&o1=${origin}&dd1=${outbound}`, {
        // fetch("https://tripadvisor1.p.rapidapi.com/flights/create-session?dd2=2020-04-14&currency=USD&o2=PHX&d2=AVP&ta=1&c=0&d1=PHX&o1=AVP&dd1=2020-04-09", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": api_key
	        }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                sid: data.search_params.sid
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate = () => {
        if(this.state.sid !== "") {
            const sidsy = this.state.sid
            
    fetch(`https://tripadvisor1.p.rapidapi.com/flights/poll?currency=USD&n=15&ns=NON_STOP%252CONE_STOP&so=PRICE&o=0&sid=${sidsy}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": api_key
            }
        })
        .then(response => response.json())
        .then(data => {
            return console.log(data.summary.sh, data.summary.pd,
                data.search_params.sid, data)
                //this.setState({
                //searchHash: data.summary.sh,
                //price: data.summary.pd
                //flightId: data.itineraries[0][0].id
                
                //})
        })
        .catch(err => {
            console.log(err);
        });
        }
    }

    componentDidUpdate = () => {
        //conditional to check if stste exists before running final fetch
        // if(this.state.)
        // const origin = this.state.flyingFrom
        // const destination = this.state.flyingTo
        // const searchHashy = this.state.searchHash
        // const flightId2 = this.state.flightId

        fetch("https://tripadvisor1.p.rapidapi.com/flights/get-booking-url?searchHash=12dae31b49dd872e95d07f6e7b1eedf3&Dest=PHX&id=AA%257C1%257C200&Orig=AVP&searchId=95ba3c72-da5e-4db8-91dc-4a078cbc38f2.2814", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": api_key
	        }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        // console.log(this.props)        
        return (
            <div style={{margin: "0 auto", width:"85%"}}>                
                    <Row className="justify-content-center" >
                        <FlighResultsDisplay />
                    </Row>                
            </div>
        )
    }
}
