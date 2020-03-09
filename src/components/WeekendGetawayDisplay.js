import React from 'react'

class WeekendGetawayDisplay extends React.Component {

    state = {
        destination: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/weekend_getaways')
        .then(response => response.json())
        .then(data => this.setState({
            destination: data.results
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
