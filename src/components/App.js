import React, { Component } from 'react';
import './styles.css';
import Home from './Home.js';
import TopPanel from './TopPanel.js';

class App extends Component {

    render() {
        return (
            <div>
                <TopPanel />
                <Home />
            </div>
        )
    }
}

export default App;