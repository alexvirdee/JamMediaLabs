import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss';

import MainDemo from './home/MainDemo';
import error404 from './elements/error404';

import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
          <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainDemo}/>
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
          <Route component={error404}/>
          </Switch>
        </BrowserRouter>
    )
  }
}


ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();