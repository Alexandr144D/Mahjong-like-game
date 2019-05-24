import React from 'react';
import './App.css';
import Router from './router/router'

class AppComponent extends React.Component {
    render() {
        return (
            <div className='main'>
                <Router />
            </div>
        )
    }
}


export default AppComponent;
