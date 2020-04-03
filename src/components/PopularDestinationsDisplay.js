import React from 'react'
import ScrapeDisplay from './ScrapeDisplay'
// import PaperAirplane from './PaperAirplane'
import MyLoader from './MyLoader'

class PopularDestinationsDisplay extends React.Component {

    state = {
        destinations: [],
        isLoading: true
    }

    componentDidMount = () => {
        fetch("https://fierce-meadow-46868.herokuapp.com/popular_destinations")
        .then(response => response.json())
        .then(data => this.setState({
            destinations: data.results,
            isLoading: false
        }))
    }

    render() {
        return (
            <div>
                <center><h3>Popular Destinations</h3></center>
                {this.state.isLoading ? (
                    <div> 
                        {/* <PaperAirplane anim={"hotels"}/> */}
                        <MyLoader />
                        <MyLoader />
                        <MyLoader />
                        <MyLoader />
                    </div>        
                    ) : (                                 
                    <div style={{margin: "0 auto", width:"80%"}}>
                        {/* maps over destinations state object and index and passes them as props to srapedisplay component */}
                        {this.state.destinations.map((destination, i) => <ScrapeDisplay key={i} destination={destination} />)}
                    </div>
                )}                 
            </div>
        )
    }
}

export default PopularDestinationsDisplay
