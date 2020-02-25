import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Flights extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
        }
    }

    changeDateFormat = (enteredDate) => {
        let date = enteredDate
        let newDate = date.split("/").reverse().join("-");
        return newDate
    }

    componentDidMount = (props) => {

        this.setState({
            isLoading: true
        })

        const outbound = this.changeDateFormat(this.props.departing)
        const inbound = this.changeDateFormat(this.props.returning)
        const origin = this.props.flyingFrom
        const destination = this.props.flyingTo
        console.log(outbound, inbound, origin, destination);

        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${outbound}?inboundpartialdate=${inbound}`, {
      // fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/AVP-sky/PHX-sky/2020-04-09?inboundpartialdate=2020-04-14", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": api_key
        }
        })
        .then(response => response.json())
        .then(data => {
            // data.map()
            console.log(data)
        })
        .catch(err => {    
            console.log(err);
        });
    }

    render() {
        const { isLoading } = this.state
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-center">                        
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}
