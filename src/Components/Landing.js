import React, {useState} from "react";

import {useSpring, useTransition, animated} from 'react-spring'
import {Transition} from 'react-spring/renderprops'
import './Landing.css';


export default function Landing() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const [items] = useState([{text: 'HARSH PATEL.'}]);

    return (
        <div className={'landing'}>
            <div className={'landing-all-content'}>


                <div className={'landing-all-content'}>
                    <animated.img style={props} src={"./LOGO.png"} className={'image-landing'}/>

                    <div className={'landing-text'}>
                        <Transition
                            items={items} keys={item => item.key}
                            from={{transform: 'translate3d(0,-150px,0)'}}
                            enter={{transform: 'translate3d(0,0px,0)'}}
                            leave={{transform: 'translate3d(0,80px,0)'}}>
                            {item => props => <animated.div style={props}>Hi, My name is </animated.div>}
                        </Transition>
                        <Transition
                            items={items} keys={item => item.key}
                            from={{transform: 'translate3d(0,120px,0)'}}
                            enter={{transform: 'translate3d(0,0px,0)'}}
                            leave={{transform: 'translate3d(0,80px,0)'}}>
                            {item => props => <h1 className='name-font' style={props}>{item.text}</h1>}
                        </Transition>
                    </div>
                </div>

                <div className={'right-content'}>

                    <Transition
                        items={items} keys={item => item.key}
                        from={{transform: 'translate3d(150px,0,0)'}}
                        enter={{transform: 'translate3d(0,0px,0)'}}
                        leave={{transform: 'translate3d(0,80px,0)'}}>
                        {item => props => <p className='right-text-content ' style={props}>
                            Software Developer skilled in Object-Oriented Programming (OOP), Web and Mobile Development,
                            Artificial Intelligence, Customer Service, Management and Adobe Photoshop. I enjoy building
                            systems to solve problems.
                            I am also a Logistics Controller with a demonstrated history of working in a high pressure
                            work
                            environment efficiently.</p>}
                    </Transition>
                </div>


            </div>
        </div>
    );
}