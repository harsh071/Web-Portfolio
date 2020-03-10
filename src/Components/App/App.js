import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../Navbar/Navbar';
import AboutMe from "../AboutMe/AboutMe";
import '../App/App.css'
import Landing from '../Landing/Landing'
import Projects from "../Project/Projects";


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

