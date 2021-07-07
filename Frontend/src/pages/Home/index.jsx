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

  const modulesInAlphabeticalOrder = modules.sort(
    (module, moduleToCompare) => (
      module.name < moduleToCompare.name ? -1 : module.name > moduleToCompare.name ? 1 : 0
    )
  );

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
            modulesInAlphabeticalOrder &&
            modulesInAlphabeticalOrder.map(module => (
              <ButtonModule
                key={module.id}
                module={module}
              />
            ))
          }
        </Section>

        {
          selectedModule &&
          <ClassTitle>
            <img src={moduleIconImg} alt="module icon" />

            <div>
              <strong>{selectedModule.name}</strong>
              <p>Todas as aulas disponíveis nesse módulo:</p>
            </div>
          </ClassTitle>
        }

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
