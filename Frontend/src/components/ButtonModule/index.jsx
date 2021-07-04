import moduleIconImg from '../../assets/module-icon.svg';

import { Container, ModuleDescription } from './styles';

function ButtonModule() {
  return (
    <Container>
      <img src={moduleIconImg} alt="module icon" />

      <ModuleDescription>
        <strong>Introdução e preparatório</strong>
        <span>3/3 aulas</span>
      </ModuleDescription>
    </Container>
  );
}

export { ButtonModule };
