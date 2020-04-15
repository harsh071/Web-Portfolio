import React, {useState} from 'react';
import './WorkExperience.css'
import Work from "../Work/Work";

export default function AboutMe(props) {

    return (
        <div className='work-experience'>
            <h1 id={'hi'} className='title'>Work Experience</h1>
            <div className='work-container'>
                <Work className='work'
                      place={'Success and Logistics Specialist | SkipTheDishes March 2018 – Present'}
                />
            </div>

            <div className='work-container'>
                <Work className='work'
                      place={'React developer | Lotlinx January 2020 – Present'}
                />
            </div>

        </div>
    )
}
