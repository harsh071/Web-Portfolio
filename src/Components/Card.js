import React from 'react'
import { animated } from 'react-spring'
import './Card.css'
export default function Card(props) {

    return (
        <animated.div
            className="card"
            onClick={()=>{window.open(props.gitLink)}}
        />
    )
}
