import React from 'react';
import './ProjectGrid.css'
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from 'axios';

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
        axios.get('https://api.github.com/users/harsh071/repos', {
            headers: {Authorization: 'Token 45e966a18085ff427bc031ff1523e05f6b65825e'}
        })
            .then((repositories) => {
                this.setState({projects: repositories.data})
            })
    }

    render() {
        let myProjects = this.state.projects;

        return <div>
            <div style={{margin:'40px'}}>Projects linked to github repo.</div>
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