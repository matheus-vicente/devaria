import { useContext, createContext, useState, useCallback, useEffect } from "react";
import { api } from "../service/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({
    token: '',
    user: undefined,
  });

  useEffect(() => {
    const token = localStorage.getItem('@Devaria:token');
    const user = localStorage.getItem('@Devaria:user');

    if (token && user) {
      setData({ token, user: JSON.parse(user)});
    }
  }, []);

  async function login(email, password) {
    const response = await api.post('/sessions/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Devaria:token', token);
    localStorage.setItem('@Devaria:user', JSON.stringify(user));

    setData({ token, user });
  }

  const logout = useCallback(() => {
    localStorage.removeItem('@Devaria:token');
    localStorage.removeItem('@Devaria:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('O método useAuth deve ser utilizado dentro de um AuthProvider!');
  }

  return context;
}

export { AuthProvider, useAuth };
