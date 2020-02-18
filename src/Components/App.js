import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Navbar';
import './App.css';
import Landing from './Landing';


class App extends React.Component {
    render() {
        return (
            <div className={'frag'}>
                <MyNavbar/>
                <Landing/>
                <div className={'app-card'}>
                </div>

                <div className={'parag'}>
                </div>

            </div>
        )
    }


}

export default App;

