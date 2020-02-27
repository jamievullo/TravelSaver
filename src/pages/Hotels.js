import React from 'react'
const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Hotels extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goingTo: this.props.location.state.hotelInfo.goingTo,
            checkIn: this.props.location.state.hotelInfo.checkIn,
            checkOut: this.props.location.state.hotelInfo.checkOut,
            roomsNeeded: this.props.location.state.hotelInfo.roomsNeeded,
            adults: this.props.location.state.hotelInfo.adults,
            children: this.props.location.state.hotelInfo.children,
            locationId: '',
            isLoading: true
        }
        // console.log(this.state)
    }
    
    //needed to reformat inputted date to input into template literal for fetch
    changeDateFormat = (enteredDate) => {
        let date = enteredDate
        let newDate = date.split("/").reverse()
        const year = parseInt(newDate[0])
        const day = 0 + "" + (parseInt(newDate[1]))
        const month = 0 + "" + (parseInt(newDate[2]))         
        const extraNewDate = [year, month, day]
        return extraNewDate.join("-")
    }

    //needed function to determine the number of nights for hotel stay in template literal
    numberOfNights = (date1, date2) => {
        let newDate1 = date1.split("/")
        let newDate2 = date2.split("/")
        const day1 = parseInt(newDate1[1])
        const day2 = parseInt(newDate2[1])
        return day2 - day1
    }

    componentDidMount = () => {
       
        //location id is going to need to be fetched first
        const destination = this.state.goingTo
        
        
        fetch(`https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${destination}`, {
        // fetch("https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=scranton", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": api_key
            }
        })
        .then(res => res.json())
        .then(data =>  {
            const values = Object.values(data)
            console.log(values[0][0].result_object.location_id)
            this.setState({
                locationId: values[0][0].result_object.location_id
            })

        })
    }
    
    //second fetch
        componentDidUpdate = () => {
            const checkIn = this.changeDateFormat(this.state.checkIn)
            const nights = this.numberOfNights(this.state.checkIn, this.state.checkOut)
            const adults = parseInt(this.state.adults)
            const rooms = parseInt(this.state.roomsNeeded)
            const locationId = this.state.locationId
            console.log("componentDidUpdate")
        fetch(`https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=${adults}&nights=${nights}&currency=USD&rooms=${rooms}&lang=en_US&checkin=${checkIn}&location_id=${locationId}`, {
            // fetch("https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=2&nights=2&currency=USD&rooms=1&lang=en_US&checkin=2020-04-14&location_id=60969", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                    "x-rapidapi-key": api_key
                }
            })
        .then(res => res.json())
        .then(data => console.log(data)) //set state, flip loading boolean               
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
            <div>
                {this.state.isLoading && <p>Loading..</p>}
                <h1 style={{color: "black"}}>Display Fetched Hotels</h1>
            </div>
            )
        }
}