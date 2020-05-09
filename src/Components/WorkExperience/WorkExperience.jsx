import React from 'react';
import './WorkExperience.css'
import Work from "../Work/Work";
import {Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AboutMe(props) {

    return (
        <Jumbotron>
                <h1 id={'hi'} className='title'>Work Experience</h1>
                <div className='work-container'>
                    <Work
                        place={'Lotlinx '}
                        position={'React developer'}
                        time={'January 2020 – April 2020'}

                    />
                    <hr></hr>
                    <Work
                        place={'SkipTheDishes'}
                        position={'Success and Logistics Specialist'}
                        time={'March 2018 – Present'}
                    />
                    <hr style={{marginBottom:'20px'}}></hr>
                    <Link to={'ProjectGrid'} style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#FF5F6D',color:'white',borderRadius:'10px',width:'150px',margin:'auto',fontSize:'20px'}}>Projects</Link>
                </div>
        </Jumbotron>

    )
}
