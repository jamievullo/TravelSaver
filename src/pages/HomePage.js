import React from 'react'
import Hero from '../components/Hero'
import VacationCardDisplay from '../components/VacationCardDisplay'


export default function HomePage() {
    return (
        <div className="home-box">
            <Hero />
            <VacationCardDisplay />
        </div>
    )
}
