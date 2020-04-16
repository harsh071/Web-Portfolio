import React from 'react';
import './AboutMe.css'
import WorkExperience from "../WorkExperience/WorkExperience";

export default function AboutMe(props) {
    return (
        <div className={'about'}>
            <p className={'content'}>
            </p>
            <WorkExperience/>
        </div>
    )
}