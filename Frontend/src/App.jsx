import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './hooks';
import { Routes } from './routes';

import { GlobalStyle } from './style/global';

function App() {
  return (
      <AppProvider>
        <BrowserRouter>
          <GlobalStyle />

          <Routes />
        </BrowserRouter>
      </AppProvider>
  );
}

export { App };
