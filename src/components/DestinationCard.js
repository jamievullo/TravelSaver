import React from 'react'

export default function DestinationCard(props) {
    return (
        <div className="justify-content-center" style={{paddingBottom: "2em"}}>
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                <h3>{props.item.title}</h3>
            </a>
            <img className="vac-card-image" src={props.item.imgSrc} alt={props.item.title} />            
        </div>
    )
}