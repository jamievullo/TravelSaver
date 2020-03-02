import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div>
            <ReactLoading type={"spinningBubbles"} color={"#364182"} position={'fixed'} top={'30%'} marginright={'auto'} marginleft={'auto'} height={500} width={230} />
        </div>
    )
}
