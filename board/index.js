import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory,Switch } from 'react-router';

import './index.css';
import App from './App';
import Board from './components/Board';
import BoardView from './components/BoardView';
import Login from './components/Login';
import Sign from './components/Sign'
import LoginSuccess from './components/LoginSuccess'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/board" component={Board}/>
        <Route path="/board/:no(\d|)/view" component={BoardView}/>
        <Route path="/login" component={Login}/>
        <Route path="/sign" component={Sign}/>
        <Route path="/login/:id" component={LoginSuccess}/>
    </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
