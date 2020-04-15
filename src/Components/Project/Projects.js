import React from 'react';
import './Project.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from 'axios';
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import {forEach} from "react-bootstrap/cjs/ElementChildren";


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects: [],itemsToShow: 3, showMore: false}
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({ itemsToShow: this.state.projects.length, expanded: true })
        ) : (
            this.setState({ itemsToShow: 3, expanded: false })
        )
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/harsh071/repos', {
            headers: {Authorization: 'Token d05ce541872e23d0d1b47479112bea6015976496'}
        })
            .then((repositories) => {
                this.setState({projects: repositories.data})
            })
    }
    render() {
        let myProjects = this.state.projects;
        let  listProjects = myProjects.map((project)=><ProjectListItem projectName={project.name} description={project.description} projectLanguage={project.language} url={project.html_url}/>)

        return (
            <div>
                <div className={'project-grid'}>
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
                        header='Project Space boost.'
                        subHeader='A space rocket game in an alien world.'
                        projectBody='Core game loop: Get from point A to B to complete the level, then progress to the next level   '
                    />
                    <ProjectListItem projectName={'Chatbot'} description={'Seq2seq is a family of machine learning approaches used for language processing.'} projectLanguage={'Chatbot made with seq2seq'}/>
                </div>
                {myProjects.slice(0, this.state.itemsToShow).map((project, i) =>
                    <ProjectListItem projectName={project.name} description={project.description} projectLanguage={project.language} url={project.html_url}/>
                )}
                {<a className="btn btn-primary" onClick={this.showMore}>
                    {this.state.expanded ? (
                        <span>Show less</span>
                    ) : (
                        <span>Show more</span>
                    )
                    }
                </a>}
            </div>

        )
    }

}

export default Projects;