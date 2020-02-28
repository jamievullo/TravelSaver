import React from 'react'

export default function DestinationCard(props) {
    //takes in link, title, and image props from vacation card display and sets display of card
    return (
        <div className="justify-content-center" style={{paddingBottom: "1em"}}>
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                <h3>{props.item.title}</h3>
            </a>
            <img className="vac-card-image" src={props.item.imgSrc} alt={props.item.title} />            
        </div>
    )
}