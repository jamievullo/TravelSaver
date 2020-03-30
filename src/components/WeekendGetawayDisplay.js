import React from 'react'
import ScrapeDisplay from './ScrapeDisplay'
// import PaperAirplane from './PaperAirplane'
import MyLoader from './MyLoader'

class WeekendGetawayDisplay extends React.Component {

    state = {
        destinations: [],
        isLoading: true
    }
    //fetch route in backend for info from scrape and set state of destinations to results
    componentDidMount = () => {
        fetch('https://git.heroku.com/fierce-meadow-46868.git/weekend_getaways')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
            destinations: data.results,
            isLoading: false
        })})
    }

    render() {
        return (
            <div>
                <center><h3>Weekend Getaways</h3></center>
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
                            {/* {this.state.isLoading && <p>Loading..</p>} */}
                            {/* maps over destinations state object and index and passes them as props to scrapedisplay component */}
                            {this.state.destinations.map((destination, i) => <ScrapeDisplay key={i} destination={destination} />)}
                        </div>
                    )}
                
            </div>
        )
    }
}

export default WeekendGetawayDisplay
