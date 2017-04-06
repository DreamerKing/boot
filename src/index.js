import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import StudentLogin from './components/student/login';

import './public/index.less';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={StudentLogin}/>
  </Router>,
  document.getElementById('root')
);
