import { AuthProvider } from './auth';
import { ModuleProvider } from './module';
import { LessonProvider } from './lesson';

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ModuleProvider>
        <LessonProvider>
          {children}
        </LessonProvider>
      </ModuleProvider>
    </AuthProvider>
  );
}

export { AppProvider };
