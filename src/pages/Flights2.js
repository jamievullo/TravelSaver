import React from 'react'
import Row from 'react-bootstrap/Row';
import FlighResultsDisplay from '../components/FlightResultsDisplay'
import PaperAirplane from '../components/PaperAirplane';
// import moment from 'moment'
import { getFlightData } from '../utils/API'

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Flights extends React.Component {
    constructor(props) {
        super(props)
        // pulling props and setting state from flight form for fetch 
        //from flightInfo state redirect object in form render
        const { departing, returning, flyingFrom, flyingTo, adults, children } = this.props.location.state.flightInfo
        this.state = {
            //do not need these variables in state because passing in props and state never changes
            // departing,
            // returning,
            // flyingFrom,
            // flyingTo,
            // adults,
            // children,            
            isLoading: true,
            flights: [],
            sid: null,
            searchHash: "",
            price: "",
            flightId: null
        }
        // console.log(this.state)
    }

    //takes in date from form, makes it an integer, then rejoins it in format necessary for fetch
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

        // this.setState({
        //     isLoading: false
        // })
        // console.log(this.state.departing)
        const outbound = this.dateFormatter(this.state.departing)
        const inbound = this.dateFormatter(this.state.returning)
        const origin = this.state.flyingFrom
        const destination = this.state.flyingTo
        getFlightData(outbound, inbound, origin, destination)
        // .then(//setState with the return of getFlightData)

        

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
            console.log(data)
            // debugger
            this.setState({
                sid: data.search_params.sid
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    

    componentDidUpdate = () => {

        if(this.state.isLoading === false) {
            return null
        } 
        
        if(this.state.sid !== null) {
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
                // debugger
                console.log(data.summary.sh, data.summary.pd,
                data.search_params.sid, data.itineraries[0].l[0].id, data)
                this.setState({
                    isLoading: false,
                    searchHash: data.summary.sh,
                    price: data.summary.pd,
                    flightId: data.itineraries[0].l[0].id                
                })
                //possible name change?? maybe
            })
        .then(this.thirdFetch())
        .catch(err => {
            console.log(err);
        });
        }
    }
    //making third function for fetch to pass as callback because stuffs happenin too fast
    //because i need to slow down third fetch. Still not working

    thirdFetch = () => {
        // debugger
        //conditional to check if state exists before running final fetch
        if(this.state.flightId !== null) {

        const origin = this.state.flyingFrom
        const destination = this.state.flyingTo
        const sh = this.state.searchHash
        const flight = this.state.flightId
        const sidsy = this.state.sid

        console.log(flight)

        fetch(`https://tripadvisor1.p.rapidapi.com/flights/get-booking-url?searchHash=${sh}&Dest=${destination}&id=${flight}&Orig=${origin}&searchId=${sidsy}`, {
        // fetch("https://tripadvisor1.p.rapidapi.com/flights/get-booking-url?searchHash=12dae31b49dd872e95d07f6e7b1eedf3&Dest=PHX&id=AA%257C1%257C200&Orig=AVP&searchId=95ba3c72-da5e-4db8-91dc-4a078cbc38f2.2814", {
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
    }
    
    

    render() {
        // console.log(this.props)        
        return (
            <div>
                {this.state.isLoading ? (
                <div> 
                    <PaperAirplane anim={"hotels"}/>
                </div>        
                ) : ( 
                <div style={{margin: "0 auto", width:"85%"}}>                
                        <Row className="justify-content-center" >
                            <FlighResultsDisplay />
                        </Row>                
                </div>
                )}
            </div>
        )
    }

}
