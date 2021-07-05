import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import { GlobalStyle } from './style/global';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />

        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export { App };
