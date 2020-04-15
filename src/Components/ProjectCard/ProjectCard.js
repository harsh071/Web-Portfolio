import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className={'project'}>
            <div className={'upper'}>
                <h3 className={'header'}>{props.name} </h3>
                <div className={'project_title'}>{props.description}</div>
            </div>
            <p className={'project_body'}>
                {props.language}
            </p>

        </div>
    );
}