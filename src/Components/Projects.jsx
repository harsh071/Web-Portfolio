import React from 'react';
import './Project.css'

export default function Projects() {
    return (
        <div className={'proj'}>
            <div className={'project'}>
                <div className={'upper'}>
                    {<div className={'header'}>Project 1 </div>}
                    {<h1 className={'project_title'}>Project Name</h1>}
                </div>
                {
                    <p className={'project_body'}>
                        This is what this project is about
                        and this is another one which is that lololol
                    </p>
                }


            </div>
            <div className={'project'}> Project 12</div>
            <div className={'project'}> Project 3</div>
            <div className={'project'}> Project 4</div>
            <div className={'project'}> Project 4</div>
            <div className={'project'}> Project 4</div>
            <div className={'project'}> Project 4</div>
            <div className={'project'}> Project 4</div>
            <div className={'project'}> Project 4</div>
        </div>
    )
}