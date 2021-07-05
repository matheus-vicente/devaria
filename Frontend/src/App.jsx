import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { GlobalStyle } from './style/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes />
    </BrowserRouter>
  );
}

export { App };
