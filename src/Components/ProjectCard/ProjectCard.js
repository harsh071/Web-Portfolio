import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className={'project'}>
            <div className={'upper '}>
                <h3 className={'header'}>{props.header} </h3>
                <div className={'project_title'}>{props.subHeader}</div>
            </div>
            <p className={'project_body'}>
                {props.projectBody}
            </p>
        </div>
    );
}