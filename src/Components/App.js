import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import '../App.css';
import {useSpring, animated} from 'react-spring'
import Card from "./Card"


/**
 * @return {boolean}
 */
function Late() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <div className={'landing'}>
            <div className={'box-text'}>
                <animated.h1 style={props}>HELLO!</animated.h1>
                <img src={"./LOGO.png"} className={'image-landing'}/>
                <animated.h3 style={props}>Welcome!</animated.h3>
                <animated.h2 style={props}>This is my personal web portfolio.</animated.h2>
            </div>
        </div>
    );
}

class App extends React.Component {
    render() {
        return (

            <div className={'frag'}>
                <Late/>
                <MyNavbar/>
                <div className={'app-card'}>
                    <Card
                        gitLink={'https://github.com/harsh071/EmergencyDepartmentSimulation'}
                    ></Card>`
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

                <div className={'parag'}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

            </div>
        );
    }


}

export default App;

