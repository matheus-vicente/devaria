import { useContext, createContext, useState, useCallback, useEffect } from "react";
import { decode } from 'jsonwebtoken';

import { api } from "../service/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({
    token: '',
    user: undefined,
  });

  useEffect(() => {
    const token = localStorage.getItem('@Devaria:token');
    const userStoraged = localStorage.getItem('@Devaria:user');


    if (token && userStoraged) {
      const { sub } = decode(token);
      const parsedUser = JSON.parse(userStoraged);

      const user = {
        ...parsedUser,
        id: sub,
      }
      setData({ token, user });
    }
  }, []);

  const login = useCallback(async (email, password) => {
    const response = await api.post('/sessions/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Devaria:token', token);
    localStorage.setItem('@Devaria:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Devaria:token');
    localStorage.removeItem('@Devaria:user');

    setData({});
  }, []);

  const turnAdmin = useCallback(async () => {
    await api.put(`/users/admin/${data.user.id}`);

    const userWithAdmin = {
      token: data.token,
      user: {
        ...data.user,
        admin: true,
      }
    }

    setData(userWithAdmin);
  }, [data]);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout, turnAdmin, token: data.token }}>
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
