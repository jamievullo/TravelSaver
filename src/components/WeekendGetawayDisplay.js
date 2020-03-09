import React from 'react'

class WeekendGetawayDisplay extends React.Component {

    state = {
        destinations: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/weekend_getaways')
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

export default WeekendGetawayDisplay
