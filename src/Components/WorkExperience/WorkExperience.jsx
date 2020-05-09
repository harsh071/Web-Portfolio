import React from 'react';
import './WorkExperience.css'
import Work from "../Work/Work";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function AboutMe(props) {

    return (
        <Jumbotron className={'home-jumbotron'}>
                <h1 id={'hi'} className='title'>Work Experience</h1>
                <div className='work-container'>
                    <Work
                        place={'Lotlinx '}
                        position={'React developer'}
                        time={'January 2020 – April 2020'}

                    />
                    <hr></hr>
                    <Work
                        place={'SkipTheDishes'}
                        position={'Success and Logistics Specialist'}
                        time={'March 2018 – Present'}
                    />
                    <hr></hr>
                </div>
        </Jumbotron>

    )
}
