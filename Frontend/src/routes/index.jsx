import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/entrar' component={Login} />
      <Route path='/cadastrar' component={SignUp} />

      <Route path='/area-do-usuario' component={Dashboard} isPrivate />
    </Switch>
  );
}

export { Routes };
