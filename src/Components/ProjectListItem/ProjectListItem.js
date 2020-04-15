import React from "react";
import './ProjectListItem.css';
import {Link} from "react-router-dom";

const ProjectListItem = (props) => {
    return (
        <div className={'project-list-item'}>
            <div className={'project-list-item-name'}>
                {props.projectName}
            </div>
            <div className={'project-list-item-description'}>
                {props.description}
            </div>
            <div className={'project-list-item-language'}>
                {props.projectLanguage}
            </div>
            {props.url&&<Link className={'project-list-item-language'} onClick={()=>window.open(props.url)}>{'View on github'}</Link>}
        </div>
    )
};

export default ProjectListItem;
