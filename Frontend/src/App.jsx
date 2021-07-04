// import { BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
// import { Login } from './pages/Login';

import { GlobalStyle } from './style/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export { App };
