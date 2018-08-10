import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage/HomePage';
import Search from './routes/Search/Search'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
