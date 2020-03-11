import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div>
            <ReactLoading type={"spinningBubbles"} color={"#364182"} position={'fixed'} style={{marginRight: 'auto', marginLeft: 'auto', height='500px', width: '230px'}} />
        </div>
    )
}
