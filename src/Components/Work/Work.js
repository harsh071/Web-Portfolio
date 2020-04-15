import React, {useState} from 'react';
import './Work.css';


export default function Work(props){

    return (
        <div>
        <div className={`work-content`}>
            {<div className='work-place' >{props.place}</div>}
        </div>

        </div>
    )
}