import {BrowserRouter as Router} from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './routes';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
    document.getElementById('app')
);

// registerServiceWorker();

module.hot.accept();