import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.scss';

import MainDemo from './home/MainDemo';

// Element Layout
import Service from './elements/Service';
import About from './elements/About';
import Contact from "./elements/Contact";
import error404 from './elements/error404';

import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
          <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainDemo}/>
          <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
          <Route component={error404}/>
          </Switch>
        </BrowserRouter>
    )
  }
}


ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();