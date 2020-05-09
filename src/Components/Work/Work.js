import React from 'react';
import './Work.css';


export default function Work(props){

    return (
        <div className={`work-content`}>
            <div className='work-place' >
                <div>{props.place}</div>
                <div style={{margin:'0 10px'}}>{' | '}</div>
                <div>{props.position}</div>
            </div>
            <div style={{margin:'0 10px'}} className='work-time' >{props.time}</div>

        </div>
    )
}