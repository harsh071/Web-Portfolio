import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import AboutMe from "./AboutMe";
import './App.css';
import Landing from './Landing';
import Social from "./Social";
import Projects from "./Projects";


class App extends React.Component {
    render() {
        return (
            <div>
                <div className={'frag'}>
                    <MyNavbar></MyNavbar>
                    <Landing/>
                    <AboutMe/>
                    <Projects/>
                </div>
            </div>

        )
    }


}

export default App;

