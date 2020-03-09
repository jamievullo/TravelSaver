import React from 'react'

class ExploreDisplay extends React.Component {

    state = {
        destinations: []
    }
    componentDidMount = () => {
        fetch('http://localhost:3001/explore')
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

export default ExploreDisplay
