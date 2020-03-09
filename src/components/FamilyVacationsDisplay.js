import React from 'react'

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
                
            </div>
        )
    }
}

export default FamilyVacationsDisplay
