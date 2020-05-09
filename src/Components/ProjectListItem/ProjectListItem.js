import React from "react";
import './ProjectListItem.css';
import {Link} from "react-router-dom";
import {Jumbotron} from "react-bootstrap";

const ProjectListItem = (props) => {
    return (
        <Jumbotron className={'project-list-item'}>
            <div className={'project-list-item-name'}>
                {props.projectName}
                <hr></hr>
            </div>
            <div className={'project-list-item-description'}>
                {props.description}
            </div>
            <div className={'project-list-item-language'}>
                {props.projectLanguage}
            </div>
            {props.url&&<Link className={'project-list-item-language'} onClick={()=>window.open(props.url)}>{'View on github'}</Link>}
        </Jumbotron>
    )
};

export default ProjectListItem;
