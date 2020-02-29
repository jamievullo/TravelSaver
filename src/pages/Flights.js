import React from 'react'
import Row from 'react-bootstrap/Row';
import FlighResultsDisplay from '../components/FlightResultsDisplay'
// import PaperAirplane from '../components/PaperAirplane';

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Flights extends React.Component {
    constructor(props) {
        super(props)
        // pulling props and setting state from flight form for fetch in flightInfo redirect object
        const { departing, returning, flyingFrom, flyingTo, adults, children } = this.props.location.state.flightInfo
        this.state = {
            departing,
            returning,
            flyingFrom,
            flyingTo,
            adults,
            children,            
            isLoading: true,
            flights: []
        }
        console.log(this.state)
    }

    //needed function to change date format to insert into template literal
    changeDateFormat = (enteredDate) => {
        let date = enteredDate
        let newDate = date.split("/").reverse()
        const year = parseInt(newDate[0])
        const day = 0 + "" + (parseInt(newDate[1]))
        const month = 0 + "" + (parseInt(newDate[2]))         
        const extraNewDate = [year, month, day]
        return extraNewDate.join("-")
    }

    componentDidMount = () => {

        this.setState({
            isLoading: false
        })
        // console.log(this.state.departing)
        const outbound = this.changeDateFormat(this.state.departing)
        const inbound = this.changeDateFormat(this.state.returning)
        const origin = this.state.flyingFrom
        const destination = this.state.flyingTo
        // console.log(outbound, inbound, origin, destination);

        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${outbound}?inboundpartialdate=${inbound}`, {
    //   fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/AVP-sky/PHX-sky/2020-04-09?inboundpartialdate=2020-010-014", {
        
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": api_key
        }
        })
        .then(response => response.json())
        .then(data => {
            // data.map()
            console.log(data.Quotes[0].MinPrice, 
                        data.Quotes[0].Direct, 
                        data.Quotes[0].OutboundLeg.CarrierIds[0], 
                        data.Quotes[0].QuoteId,
                        data.Places[0].SkyscannerCode,
                        data.Places[0].CityName,
                        data.Places[0].Name,
                        data.Places[1].SkyscannerCode,
                        data.Places[1].CityName,
                        data.Places[1].Name,
                        data.Places[0].CityName,
                        data
                        )
        })
        .catch(err => {    
            console.log(err);
        });
    }

    render() {
        console.log(this.props)        
        return (
            <div style={{margin: "0 auto", width:"85%"}}>                
                    <Row className="justify-content-center" >
                        <FlighResultsDisplay />
                    </Row>                
            </div>
        )
    }
}
