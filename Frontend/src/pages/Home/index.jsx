import moduleIconImg from '../../assets/module-icon.svg';

import { useModule } from '../../hooks/module';
import { useLesson } from '../../hooks/lesson';

import { Header } from '../../components/Header';
import { ButtonModule } from '../../components/ButtonModule';
import { CardClasses } from '../../components/CardClasses';

import { Content, Title, Section, ClassTitle, CardWrapper } from './styles';

function Home() {
  const { modules, selectedModule } = useModule();
  const { lessonsToBeShown } = useLesson();

  return (
    <>
      <Header />

      <Content>
        <Title>
          <h1>Módulos</h1>
          <p>Selecione o módulo para ver as aulas disponíveis:</p>
        </Title>

        <Section>
          {
            modules.map(module => (
              <ButtonModule
                key={module.id}
                module={module}
              />
            ))
          }
        </Section>

        <ClassTitle>
          <img src={moduleIconImg} alt="module icon" />

          <div>
            <strong>{selectedModule.name}</strong>
            <p>Todas as aulas disponíveis nesse módulo:</p>
          </div>
        </ClassTitle>

        <CardWrapper>
          {
            lessonsToBeShown &&
            lessonsToBeShown.map(
              lesson => (
                <CardClasses
                  key={lesson.id}
                  lesson={lesson}
                />
              )
            )
          }
        </CardWrapper>
      </Content>
    </>
  );
}

export { Home };
