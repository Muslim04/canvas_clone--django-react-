import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/courses" exact component={CourseList} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);

export default Routes;
