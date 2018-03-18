import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Route path="/" component={ Home } />
    </Router>
), document.getElementById('root'));
registerServiceWorker();
