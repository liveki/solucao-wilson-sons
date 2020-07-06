import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ManeuverRegister from '../pages/ManeuverRegister';
import NewManeuverConfirmation from '../pages/NewManeuverConfirmation';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/newmaneuver" exact component={ManeuverRegister} isPrivate />
    <Route
      path="/newmaneuver/confirmation"
      component={NewManeuverConfirmation}
      isPrivate
    />
  </Switch>
);

export default Routes;
