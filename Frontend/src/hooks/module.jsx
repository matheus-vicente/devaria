import { useContext, createContext, useState, useEffect, useCallback } from 'react';

import { api } from '../service/api';
import { useAuth } from './auth';

const ModuleContext = createContext();

function ModuleProvider({ children }) {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState({});
  const [selectedModuleById, setSelectedModuleById] = useState('');
  const { token } = useAuth();

  useEffect(async () => {
    const response = await api.get('modules');

    const data = response.data;

    setSelectedModule(data[0]);
    setModules(data);
  }, []);

  const createModule = useCallback(async (data) => {
    const response = await api.post('/modules', {
      name: data,
    }, {
      headers: {
        authorization: 'Bearer ' + token,
      }
    });

    setModules(state => [...state, response.data]);
  }, [token]);

  const updateModule = useCallback(async (id, name) => {
    await api.put(`/modules/${id}`, {
      name,
    }, {
      headers: {
        authorization: 'Bearer ' + token,
      }
    });
  }, [token]);

  const deleteModule = useCallback(async (data) => {
    await api.delete(`/modules/${data}`, {
      headers: {
        authorization: 'Bearer ' + token,
      }
    });

    const newModulesState = modules.filter(module => module.id !== data);

    setModules(newModulesState);
  }, [token, modules]);

  return (
    <ModuleContext.Provider value={{
      modules,
      selectedModule,
      setSelectedModule,
      selectedModuleById,
      setSelectedModuleById,
      createModule,
      updateModule,
      deleteModule,
    }}>
      {children}
    </ModuleContext.Provider>
  );
}

function useModule() {
  const context = useContext(ModuleContext);

  if (!context) {
    throw new Error('O método useModule só pode ser utilizado dentro de um ModuleProvider');
  }

  return context;
}

export { ModuleProvider, useModule };
