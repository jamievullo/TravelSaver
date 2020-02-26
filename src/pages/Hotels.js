import React from 'react'
const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Hotels extends React.Component {
    constructor() {
        super()

        this.state = {
            goingTo: this.props.location.state.hotelInfo.goingTo,
            checkIn: this.props.location.state.hotelInfo.checkIn,
            checkOut: this.props.location.state.hotelInfo.checkOut,
            roomsNeeded: this.props.location.state.hotelInfo.roomsNeeded,
            adults: this.props.location.state.hotelInfo.adults,
            children: this.props.location.state.hotelInfo.children,
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({
            isLoading: true
        })

        fetch("https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=2&nights=2&currency=USD&rooms=1&lang=en_US&checkin=2020-04-14&location_id=60969", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": api_key
	}
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1 style={{color: "black"}}>Display Fetched Hotels</h1>
            </div>
            )
        }
}