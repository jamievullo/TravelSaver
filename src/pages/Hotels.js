import React from 'react'
// import Loading from '../components/Loading'
import HotelResultsDisplay from '../components/HotelResultsDisplay'
import PaperAirplane from '../components/PaperAirplane'
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
        const checkIn = this.changeDateFormat(this.state.checkIn)
        const nights = this.numberOfNights(this.state.checkIn, this.state.checkOut)
        const adults = parseInt(this.state.adults)
        const rooms = parseInt(this.state.roomsNeeded)
        const locationId = this.state.locationId
        // console.log("componentDidUpdate")

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
                // console.log(hotel.name, hotel.address, hotel.rating, hotel.price, hotel.website, hotel.amenities)
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
                    <PaperAirplane anim={"hotels"}/>
                </div>        
                ) : (                                 
            <div style={{margin: "0 auto", width:"85%"}}>
                {/* {this.state.isLoading && <p>Loading..</p>} */}
                {/* maps over hotels state object and index and passes them as props HRD component */}
                {this.state.hotels.map((hotel, i) => <HotelResultsDisplay key={i} hotel={hotel} />)}
            </div>
                )} 
            </div>     
            )
        }
}