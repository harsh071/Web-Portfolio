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

        return (
            <div className='Project-container'>
                <div className='projects-header'>PROJECTS</div>
                <ProjectListItem projectName={'Chatbot'} description={'Seq2seq is a family of machine learning approaches used for language processing.'} projectLanguage={'Chatbot made with seq2seq'}/>
                <ProjectListItem projectName={'BetMates'} description={' Built parts of an android application that allows users to create and bet with their friends or against them where they can partake in friendly competition. '} projectLanguage={'Software Engineering 1 project'}/>
                <ProjectListItem projectName={'Project Space boost.'} description={'Core game loop: Get from point A to B to complete the level, then progress to the next level'} projectLanguage={'A space rocket game in an alien world.'}/>
                <div className='projects-header'>PROJECTS connected to github</div>
                <div className={'project-grid'}>
                    {myProjects.slice(0, this.state.itemsToShow).map((project, i) =>
                        <ProjectCard
                            name={project.name}
                            description={project.description}
                            language={project.language}
                            url={project.html_url}
                        />
                    )}
                </div>

                {<a className="show" onClick={this.showMore}>
                    {this.state.expanded ? (
                        <div className="show-text">Show less</div>
                    ) : (
                        <div className="show-text">Show more</div>
                    )
                    }
                </a>}
            </div>

        )
    }

}

export default Projects;