import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//working on Paper Airplane for loading animation
import PaperAirplane from '../components/PaperAirplane';

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Flights extends React.Component {
    constructor(props) {
        super(props)

        //pulling props from flight form for fetch
        this.state = {
            departing: this.props.location.state.flightInfo.departing,
            returning: this.props.location.state.flightInfo.returning,
            flyingFrom: this.props.location.state.flightInfo.flyingFrom,
            flyingTo: this.props.location.state.flightInfo.flyingTo,
            
            isLoading: false
        }
        // console.log(this.state)
    }

        //****eyes****
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
            isLoading: true
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
        // const { isLoading } = this.state
        // if (isLoading) {
        //     return <p>Loading ...</p>;
        // }
        
        return (
            <div >
                <Container fluid={true}>
                    <Row className="justify-content-center" >
                        {this.state.departing} 
                    </Row>
                </Container>
            </div>
        )
    }
}
