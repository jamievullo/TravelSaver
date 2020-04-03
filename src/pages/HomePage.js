import React from 'react'
import Hero from '../components/Hero'
import VacationCardDisplay from '../components/VacationCardDisplay'

export default class HomePage extends React.Component {

    successMessage = () => {
        if(this.props.location.state.success === true) {
            return "Successfully Logged In";
        } 
    }

    render() {
        return (
            <>                
                {this.props.location.state && this.successMessage()}
                <div className="home-box">
                    <Hero />
                </div>
                <div>
                    <VacationCardDisplay />
                </div>
            </>
        )
    }
}
