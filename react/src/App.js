import React, { Component } from 'react';

import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import appRouters from '@/router/appRouters.js';
import MainFooter from '@/components/mainfooter/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {
              appRouters.map((item,index) => {
                return (<Route path={item.path} component={item.component} key='index'/>)
              })
            }
            <Redirect to = {{pathname: '/home'}} />
          </Switch>
        </Router>
        <MainFooter />
      </div>
    );
  }
}

export default App;
