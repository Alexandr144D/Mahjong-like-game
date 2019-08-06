import React from 'react';
import {Route} from 'react-router-dom';
import Routes from './routes';

import EntryComponent from '../containers/EntryComponent/EntryComponent';
import GameComponent from '../containers/GameComponent/GameComponent';


class Router extends React.Component {
    render () {
        return (
            <>
                <Route exact path={Routes.entry} component={EntryComponent}/>
                <Route exact path={Routes.gamePage} component={GameComponent}/>
            </>
        )
    }
}

export default Router;
