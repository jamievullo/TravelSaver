import React from 'react'

export default function DestinationCard(props) {
    return (
        <div className="d-inline-block" style={{paddingBottom: "6em"}}>
            <div>
            <a href={props.link} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {props.title}
            </a>
            </div>
            <img className="vac-card-image" 
                src={props.item.imgSrc} 
                alt={props.item.title} 
            />            
        </div>
    )
}