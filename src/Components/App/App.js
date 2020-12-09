import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css'
import Landing from '../Landing/Landing'
import Projects from "../Project/Projects";
import {BrowserRouter, Route} from "react-router-dom";
import WorkExperience from "../WorkExperience/WorkExperience";
import ParticlesContainer from "../ParticlesContainer";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import MyNavbar from "../Navbar/Navbar";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                        {/*<MyNavbar/>*/}
                        <Route path="/" exact component={Landing}></Route>

                        <Route path="/Web-Portfolio" exact component={Landing}></Route>

                        <ParticlesContainer/>

            </BrowserRouter>
        )
    }


}

export default App;

