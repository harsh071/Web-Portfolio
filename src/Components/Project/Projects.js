import React from 'react';
import './Project.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from 'axios';


class Projects extends React.Component {

    componentDidMount() {
        axios.get('https://api.github.com/users/harsh071/repos', {
            headers: {Authorization: 'Token d05ce541872e23d0d1b47479112bea6015976496'}
        })
            .then((repositories) => {
                this.setState({projects: repositories.data})
            })
    }

    constructor(props) {
        super(props);
        this.state = {projects: []}
    }

    render() {
        let myProjects = this.state.projects;
        return (
            <div className={'proj'}>
                {myProjects.map((project) => <ProjectCard
                    header={project.name}
                    subHeader={project.language}
                />)}
                <ProjectCard
                    header='Chatbot'
                    subHeader='Chatbot made with seq2seq'
                    projectBody='
                Seq2seq is a family of machine learning approaches used for language processing.
                '
                />
                <ProjectCard
                    header='BetMates: '
                    subHeader='Software Engineering 1 project'
                    projectBody='• Built parts of an android application that allows users to create and bet with their friends or
against them where they can partake in friendly competition. '
                />
                <ProjectCard
                    header='SarasLagan'
                    subHeader='A gujrati matrimonial website. '
                    projectBody='This project targets the gujarati society where arranged marriages are common.'
                />
                <ProjectCard
                    header='Project Space boost.'
                    subHeader='A space rocket game in an alien world.'
                    projectBody='Core game loop: Get from point A to B to complete the level, then progress to the next level   '
                />
                <ProjectCard
                    header='Project Space boost.'
                    subHeader='A space rocket game in an alien world.'
                    projectBody='Core game loop: Get from point A to B to complete the level, then progress to the next level   '
                />
                <ProjectCard
                    header='Project Space boost.'
                    subHeader='A space rocket game in an alien world.'
                    projectBody='Core game loop: Get from point A to B to complete the level, then progress to the next level   '
                />

            </div>
        )
    }

}

export default Projects;