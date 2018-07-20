import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ErrorBoundary from './ErrorBoundary.jsx'
import rootRouters from  '@/router/rootRouters.js'
import store from './store/index.js'

import './main.scss'

var routelist = []
rootRouters.map((item, index) => {
    return routelist.push(<Route path={item.path} component={item.component} key='index'/>)
})

function show () {
    ReactDOM.render(
        <ErrorBoundary>
             <Router>
                <Switch>
                {routelist}
                </Switch>
            </Router>
        </ErrorBoundary>
       
    , document.getElementById('root'));
}
show()

store.subscribe(show);

registerServiceWorker();
