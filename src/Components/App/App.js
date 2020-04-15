import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../Navbar/Navbar';
import AboutMe from "../AboutMe/AboutMe";
import Work from "../Work/Work";
import '../App/App.css'
import Landing from '../Landing/Landing'
import Projects from "../Project/Projects";
import {BrowserRouter, Route} from "react-router-dom";
import WorkExperience from "../WorkExperience/WorkExperience";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className={'frag'}>
                        <Route path="/" exact component={Landing}></Route>
                        <Route path="/" exact component={AboutMe}></Route>
                        <Route path="/" exact component={Projects}></Route>
                        <Route path="/Work" component={WorkExperience}></Route>
                        <Route path="/Projects" component={Projects}></Route>
                        {/*<MyNavbar></MyNavbar>*/}
                        {/*<Landing/>*/}
                        {/*<AboutMe/>*/}
                        {/*<Projects/>*/}
                    </div>
                </div>
            </BrowserRouter>
        )
    }


}

export default App;

