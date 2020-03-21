import React from 'react';
import './AboutMe.css'
import WorkExperience from "../WorkExperience/WorkExperience";

export default function AboutMe(props) {
    return (
        <div className={'about'}>
            <p className={'content'}>
                Most of my programming experiences have been writing code in Java, C, C++, and C# for a variety
                of applications in a version control environment. I have successfully exercised Object Oriented
                methodologies, as well as agile methodologies in the Software Engineering and Object Orientation
                programming courses.
            </p>
            <WorkExperience/>
        </div>
    )
}