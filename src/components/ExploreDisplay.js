import React from 'react'

class ExploreDisplay extends React.Component {

    state = {
        destination: []
    }
    componentDidMount() {
        fetch('http://localhost:3001/explore')
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

export default ExploreDisplay
