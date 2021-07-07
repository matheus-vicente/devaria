import { useContext, createContext, useState, useEffect, useCallback } from 'react';

import { api } from '../service/api';
import { useAuth } from './auth';

const LessonContext = createContext();

function LessonProvider({ children }) {
  const [lessons, setLessons] = useState([]);
  const [lessonsToBeShown, setLessonsToBeShown] = useState([]);
  const [selectedLessonById, setSelectedLessonById] = useState('');
  const { token } = useAuth();

  useEffect(async () => {
    const response = await api.get('lessons');

    const data = response.data;

    setLessons(data);
  }, []);

  const createLesson = useCallback(async (name, module_id, class_date) => {
    const response = await api.post('lessons', {
      name,
      class_date,
    }, {
      headers: {
        module_id,
        authorization: 'Bearer ' + token,
      }
    });

    setLessons(state => [...state, response.data]);
  }, [token]);

  const updateLesson = useCallback(async (id, name, class_date) => {
    await api.put(`lessons/${id}`, {
      name,
      class_date,
    }, {
      headers: {
        authorization: 'Bearer ' + token,
      }
    });
  }, [token]);

  const deleteLesson = useCallback(async (data) => {
    await api.delete(`lessons/${data}`, {
      headers: {
        authorization: 'Bearer ' + token,
      }
    });

    const newLessonsState = lessons.filter(lesson => lesson.id !== data);

    setLessons(newLessonsState);

  }, [token, lessons]);

  return (
    <LessonContext.Provider value={{
      lessons,
      lessonsToBeShown,
      setLessonsToBeShown,
      selectedLessonById,
      setSelectedLessonById,
      createLesson,
      updateLesson,
      deleteLesson,
    }}>
      {children}
    </LessonContext.Provider>
  );
}

function useLesson() {
  const context = useContext(LessonContext);

  if (!context) {
    throw new Error('O método useLesson só pode ser utilizado dentro de um LessonProvider');
  }

  return context;
}

export { LessonProvider, useLesson };
