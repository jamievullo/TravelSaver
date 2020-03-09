import React from 'react'

class PopularDestinationsDisplay extends React.Component {

    state = {
        destinations: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/popular_destinations")
        .then(response => response.json())
        .then(data => this.setState({
            destinations: data.results
        }))
    }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PopularDestinationsDisplay
