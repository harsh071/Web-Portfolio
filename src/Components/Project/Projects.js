import React from 'react';
import './Project.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from 'axios';
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import {Link} from "react-router-dom";


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects: [],itemsToShow: 3, showMore: false}
    }

    render() {

        return (
            <div className='Project-container'>
                <div className='projects-header'>PROJECTS</div>
                <ProjectListItem projectName={'Chatbot'} description={'A webpage chatbot that uses DiagFlow to process natural language and is hosted on Heroku.'} projectLanguage={'React, DiagFlow, Heroku, MongoDB, Node.js, Git.'}/>
                <ProjectListItem projectName={'BetMates'} description={' Built parts of an android application that allows users to create and bet with their friends or against them where they can partake in friendly competition. '} projectLanguage={'Java, XML, HSQLDB'}/>
                <ProjectListItem projectName={'Satsang Insight: Journey to Spirituality '} description={'Assists people in the community to improve their spiritual journey. Consists of a personalized\n' +
                'feed of media and reminders to achieve daily spiritual goals.'} projectLanguage={'React Native, MongoDB'}/>
                <Link to={'/Web-Portfolio/ProjectGrid'} className='projects-button'>Other Projects</Link>

            </div>

        )
    }

}

export default Projects;