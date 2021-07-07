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

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !user) {
          return <Redirect
            to={{
              pathname: '/',
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
