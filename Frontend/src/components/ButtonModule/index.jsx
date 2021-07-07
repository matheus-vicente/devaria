import { useCallback } from 'react';

import { useModule } from '../../hooks/module';
import { useLesson } from '../../hooks/lesson';

import moduleIconImg from '../../assets/module-icon.svg';

import { Container, ModuleDescription } from './styles';

function ButtonModule({ module }) {
  const { setSelectedModule } = useModule();
  const { lessons, setLessonsToBeShown } = useLesson();

  const allLessonsForThisModule = lessons.filter(
    lesson => lesson.ModuleId === module.id
  );

  const handleSetButtonModule = useCallback(() => {
    const lessonsToBeShow = lessons.filter(
      lesson => lesson.ModuleId === module.id
    );

    setSelectedModule(module);
    setLessonsToBeShown(lessonsToBeShow);
  }, [lessons]);

  return (
    <Container onClick={handleSetButtonModule}>
      <img src={moduleIconImg} alt="module icon" />

      <ModuleDescription>
        <strong>{module.name}</strong>
        <span>{allLessonsForThisModule.length} aulas</span>
      </ModuleDescription>
    </Container>
  );
}

export { ButtonModule };
