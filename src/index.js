import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import MainDemo from './home/MainDemo';

import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render() {
    return (
      <h1>JAM Media Labs, LLC</h1>
    )
  }
}


ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();