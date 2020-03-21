import React, {useState} from 'react';
import './Work.css';


export default function Work(props){
    const [clicked, setClicked] = useState(false);
    const handleClick = (e) => {
        setClicked(!clicked);
        console.log(clicked)
    }
    const workDescriptionPoints = props.description.split('\n');

    return (
        <div onClick={handleClick}>
        <div className={`work-content ${clicked ? 'selected' : ' '}`}>
            {<div className='work-place' >{props.place}</div>}
        </div>
         <div className={`work-description ${clicked ? '' : 'hidden'}`}>{
             workDescriptionPoints.map((description)=><div className={'description'}>{'•'+description}</div>
             )
         } </div>
        </div>
    )
}