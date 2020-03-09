import React from 'react'
import ScrapeDisplay from './ScrapeDisplay'
import PaperAirplane from './PaperAirplane'

class FamilyVacationsDisplay extends React.Component {

    state = {
        destinations: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/family_vacations')
        .then(response => response.json())
        .then(data => this.setState({
            destinations: data.results
            })
        )  
    }

    render() {
        return (
            <div>
                <center><h3>Family Vacations</h3></center>
                {this.state.isLoading ? (
                    <div> 
                        <PaperAirplane anim={"hotels"}/>
                    </div>        
                    ) : (                                 
                    <div style={{margin: "0 auto", width:"80%"}}>
                        {/* {this.state.isLoading && <p>Loading..</p>} */}
                        {/* maps over destinations state object and index and passes them as props to srapedisplay component */}
                        {this.state.destinations.map((destination, i) => <ScrapeDisplay key={i} destination={destination} />)}
                    </div>
                )} 
                
            </div>
        )
    }
}

export default FamilyVacationsDisplay
