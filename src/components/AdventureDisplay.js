import React from 'react'

class AdventureDisplay extends React.Component {

    componentDidMount() {
        fetch('http://localhost:3001/adventure')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AdventureDisplay
