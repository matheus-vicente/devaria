import moduleIconImg from '../../assets/module-icon.svg';

import { Header } from '../../components/Header';
import { ButtonModule } from '../../components/ButtonModule';
import { CardClasses } from '../../components/CardClasses';

import { Content, Title, Section, ClassTitle, CardWrapper } from './styles';

function Home() {
  return (
    <>
      <Header />

      <Content>
        <Title>
          <h1>Módulos</h1>
          <p>Selecione o módulo para ver as aulas disponíveis:</p>
        </Title>

        <Section>
          <ButtonModule />

          <ButtonModule />

          <ButtonModule />

          <ButtonModule />

          <ButtonModule />

          <ButtonModule />
        </Section>

        <ClassTitle>
          <img src={moduleIconImg} alt="module icon" />

          <div>
            <strong>Introdução e Preparatório</strong>
            <p>Todas as aulas disponíveis nesse módulo:</p>
          </div>
        </ClassTitle>

        <CardWrapper>
          <CardClasses />

          <CardClasses />

          <CardClasses />
        </CardWrapper>
      </Content>
    </>
  );
}

export { Home };
