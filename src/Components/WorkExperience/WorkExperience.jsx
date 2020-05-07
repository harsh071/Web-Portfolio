import React from 'react';
import './WorkExperience.css'
import Work from "../Work/Work";

export default function AboutMe(props) {

    return (
        <div className='work-experience'>
            <h1 id={'hi'} className='title'>Work Experience</h1>
            <div className='work-container'>
                <Work
                      place={'SkipTheDishes'}
                      position={'Success and Logistics Specialist'}
                      time={'March 2018 – Present'}
                />
                <hr></hr>
                <Work
                      place={'Lotlinx '}
                      position={'React developer'}
                      time={'January 2020 – Present'}

                />
                <hr></hr>
            </div>

        </div>
    )
}
