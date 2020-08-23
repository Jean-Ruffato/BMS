import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Books from './component/Books';

export default function Routes () {
    return (
        <Router>
            <Route exact path="/" component={ App } />
            <Route path="/Books/:id" component={ Books } />
        </Router>
    );
}
