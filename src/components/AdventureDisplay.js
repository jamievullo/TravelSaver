import React from 'react'

class AdventureDisplay extends React.Component {

    state = {
        destinations: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/adventure')
        .then(response => response.json())
        .then(data => this.setState({
            destinations: data.results
        })
        )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AdventureDisplay
