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
                      description={
                          '\tProvided quality customer service while selling tickets, ensuring safety of pedestrians as well as moving vehicles. \n' +
                          '\tInstructed cars where to park and responding to all enquiries to provide support and guidance. \n' +
                          '\tEnsured communication between the traffic team is efficient and communicating with all teams to ensure traffic flows smoothly.'
                      }
                />
            </div>

            <div className='work-container'>
                <Work className='work'
                      place={'React developer | Lotlinx January 2020 – Present'}
                      description={
                          'In-depth understanding of Javascript, the DOM, and relevant concepts'
                      }
                />
            </div>

        </div>
    )
}
