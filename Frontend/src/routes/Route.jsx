import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { user } = useAuth();

// false/false ok
// false/true ok
// true/false not ok
// true/true ok

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !user) {
          return <Redirect
            to={{
              pathname: '/entrar',
              state: { location },
            }}
          />
        }

        return <Component />
      }}
    />
  );
}

export { Route };
