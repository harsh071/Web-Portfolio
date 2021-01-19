import React from 'react';
import './ProjectGrid.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from 'axios';
import {Link} from "react-router-dom";

class ProjectGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {projects: [], itemsToShow: 3, showMore: false}
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({itemsToShow: this.state.projects.length, expanded: true})
        ) : (
            this.setState({itemsToShow: 3, expanded: false})
        )
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/harsh071/repositories', {
        })
            .then((repositories) => {
                this.setState({projects: repositories.data})
            })
    }

    render() {
        let myProjects = this.state.projects;
        return <div>
            <div style={{margin: '40px'}}>Projects linked to github repo.</div>
            {myProjects.length === 0 && <div>Github API seems not to be working :( <Link to={'/Web-Portfolio'}>Home</Link></div>}
            <div className={'project-grid'}>
                {myProjects.slice(0, this.state.itemsToShow).map((project, i) =>
                    <ProjectCard
                        key={i}
                        name={project.name}
                        description={project.description}
                        language={project.language}
                        url={project.html_url}
                    />
                )}
            </div>
            {<div className="show" onClick={this.showMore}>
                {this.state.expanded ? (
                    <div className="show-text">Show less</div>
                ) : (
                    <div className="show-text">Show more</div>
                )
                }
            </div>}
        </div>
    }
}

export default ProjectGrid;