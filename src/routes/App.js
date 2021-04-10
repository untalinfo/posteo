import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomeFeed from '../containers/HomeFeed'
import PostDetail from '../containers/PostDetail'
import '../assets/styles/App.scss'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={ HomeFeed } />
        <Route exact path='/post_detail/:id' component={ PostDetail } />
        <Redirect to='/' />
      </Switch>
    </Router>
  </>
  );
};

export default App;
