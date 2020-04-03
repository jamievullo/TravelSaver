import React from 'react'
import HotelResultsDisplay from '../components/HotelResultsDisplay'
import MyLoader from '../components/MyLoader'
const api_key = process.env.REACT_APP_API_SKYSCANNER_KEY

export default class Hotels extends React.Component {
    constructor(props) {
        super(props)
        const { goingTo, 
                checkIn, 
                checkOut, 
                roomsNeeded, 
                adults, 
                children } = this.props.location.state.hotelInfo
        this.state = {
            goingTo,
            checkIn,
            checkOut,
            roomsNeeded,
            adults,
            children,
            locationId: '',
            isLoading: true,
            hotels: []
            }
    }

    //needed function to determine the number of nights for hotel stay in template literal
    numberOfNights = (date1, date2) => {
        let newDate1 = date1.split("-")
        let newDate2 = date2.split("-")
        const day1 = parseInt(newDate1[2])
        const day2 = parseInt(newDate2[2])
        return day2 - day1
    }

    componentDidMount = () => {
        //location id is fetched first
        const destination = this.state.goingTo
            
        fetch(`https://tripadvisor1.p.rapidapi.com/locations/auto-complete?lang=en_US&units=mi&query=${destination}`, {
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
        //checks for state of isLoading and if false then run fetch. Prevents infinite loop
        //of fetching.
        if(this.state.isLoading === false) {
            return null
        }
        // const checkIn = this.changeDateFormat(this.state.checkIn)
        const checkIn = this.state.checkIn
        const nights = this.numberOfNights(this.state.checkIn, this.state.checkOut)
        const adults = parseInt(this.state.adults)
        const rooms = parseInt(this.state.roomsNeeded)
        const locationId = this.state.locationId

        fetch(`https://tripadvisor1.p.rapidapi.com/hotels/get-details?adults=${adults}&nights=${nights}&currency=USD&rooms=${rooms}&lang=en_US&checkin=${checkIn}&location_id=${locationId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": api_key
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                let allHotels = data.data
                this.setState({
                    isLoading: false,
                    hotels: [...allHotels]
                })
                return null 
            })            
            .catch(err => {
                console.log(err);
            });        
    }

    render() {
        return (
            <div>
            {this.state.isLoading ? (
                <div> 
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />        
                </div>        
                ) : ( 
                <div>
                    <center><h3>Hotel Search Results</h3></center>
                    <div style={{margin: "0 auto", width:"85%"}}>
                        {/* maps over hotels state object and index and passes them as props HRD component */}
                        {this.state.hotels.map((hotel, i) => <HotelResultsDisplay key={i} hotel={hotel} />)}
                    </div>                                
                </div>
                )} 
            </div>     
            )
        }
}