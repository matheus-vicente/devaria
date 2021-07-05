import {
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (
        isPrivate ?
          ( <Component /> )
        :
          (
            <Redirect
              to={{
                pathName: '/',
                state: { location },
              }}
            />
          )
      )}
    />
  );
}

export { Route };
