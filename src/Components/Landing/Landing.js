import React, {useState} from "react";

import {useSpring, animated} from 'react-spring'
import {Transition} from 'react-spring/renderprops'
import './Landing.css';
import {ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [items] = useState([{text: 'HARSH PATEL.'}]);

    return (
        <div className={'landing'}>
            <div className={'landing-all-content'}>
                <animated.img style={props} src={process.env.PUBLIC_URL + "/LOGO.png"} className={'image-landing'}/>
                <div className={'landing-text'}>
                    <Transition
                        items={items} keys={item => item.key}
                        from={{transform: 'translate3d(0,-220px,0)'}}
                        enter={{transform: 'translate3d(0,0px,0)'}}
                        leave={{transform: 'translate3d(0,300px,0)'}}>
                        {item => props => <div className='name-font' style={props}>
                            {item.text}
                        </div>}
                    </Transition>
                    <Transition
                        items={items} keys={item => item.key}
                        from={{transform: 'translate3d(150px,0,0)'}}
                        enter={{transform: 'translate3d(0,0px,0)'}}
                        leave={{transform: 'translate3d(0,80px,0)'}}>
                        {item => props =>
                            {
                                return <p href={'#'} className={'dev-text'} style={{props}}>
                            Software Developer
                        </p>}}
                    </Transition>
                    <Transition
                        items={items} keys={item => item.key}
                        from={{transform: 'translate3d(-150px,0,0)'}}
                        enter={{transform: 'translate3d(0,0px,0)'}}
                        leave={{transform: 'translate3d(0,80px,0)'}}>
                        {item => props => <h2 className={'dev-text'} style={props}>
                            Connect With Me!
                        </h2>}
                    </Transition>
                    <div className={'social-media'}>
                        <div className={'social-media-item'}
                             onClick={()=>{window.open('https://linkedin.com/in/harshp071')}}
                        ><FontAwesomeIcon
                            style={{width: '30px', height: '30px', color: 'rgb(40,103,178)'}} icon={faLinkedinIn}/>
                        </div>
                        <div className={'social-media-item'}
                             onClick={()=>{window.open('mailto:hypharsh@gmail.com')}}
                        ><FontAwesomeIcon style={{width: '30px', height: '30px'}} icon={faEnvelope}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}