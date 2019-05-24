import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import Router from './router/router'

class AppComponent extends React.Component {
    componentDidMount() {
        this.props.history.push('/entry')
    }

    render() {
        return (
            <div className='main'>
                <Router />
            </div>
        )
    }
}


export default withRouter(AppComponent);
