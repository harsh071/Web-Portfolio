import React from "react";
import './ProjectCard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard(props) {
    return (
        <div className={'project'}>
            <div className={'upper'}>
                <h3 className={'header'}>{props.name} </h3>
                <div className={'project_title'}>{props.description}</div>
            </div>
            <div className={'project_body'} style={{fontWeight:'bold'}}>
                {props.language}
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <FontAwesomeIcon icon={faGithubSquare} onClick={()=>window.open(props.url)} style={{width:'40px',height:'40px',cursor:'pointer',textDecoration:'underline'}}>Github</FontAwesomeIcon>
                <div icon={faGithubSquare} onClick={()=>window.open(props.url)} style={{width:'fit-content',cursor:'pointer',textDecoration:'underline'}}>Github</div>
            </div>

        </div>
    );
}