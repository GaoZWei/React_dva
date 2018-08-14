import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage/HomePage';
import Search from './routes/Search/Search';
import Sort from './routes/Sort/Sort';
import Online from './routes/Online/Online';
import Hot from './routes/Hot/Hot';
import Knowledge from './routes/Knowledge/Knowledge'
import IndexPage from './routes/IndexPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={Search} />
        <Route path="/sort" exact component={Sort} />
        <Route path="/online" exact component={Online} />
        <Route path="/hot" exact component={Hot} />
        <Route path="/indexPage" exact component={IndexPage} />
        <Route path="/knowledge" exact component={Knowledge} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
