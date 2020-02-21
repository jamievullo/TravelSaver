import React from 'react'

import DestinationCardInfo from '../components/DestinationCardInfo'

export default function DestinationCard(props) {
    return (
        <div className="d-inline-block vac-card" onClick={(e) => props.click(props.item)} style={{paddingBottom: "6em"}}>
            { props.item.selected && <DestinationCardInfo title={props.item.title} link={props.item.link} /> }
            <img className="vac-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            
        </div>
    )
}