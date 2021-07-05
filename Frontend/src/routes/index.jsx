import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />

      <Route path='/dashboard' component={Dashboard} isPrivate />
    </Switch>
  );
}

export { Routes };
