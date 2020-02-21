import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function DestinationCardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div className="vac-card-info" style={style}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </animated.div>
    )
}