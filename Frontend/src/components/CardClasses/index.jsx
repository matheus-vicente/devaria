import { FiVideo, FiClock } from 'react-icons/fi';

import { Container, Header, ContainerInfo } from './styles';

function CardClasses() {
  return (
    <Container>
      <Header>
        <div>Introdução e Preparatório</div>

        <span>3/3</span>
      </Header>

      <strong>Iniciando como um programador(a) Devaria</strong>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus cursus libero, eget accumsan mauris. Ut scelerisque, turpis in tristique rhoncus, elit magna faucibus magna, ac pretium elit mi et leo. Nulla sit amet nibh diam.</p>

      <ContainerInfo>
        <div>
          <FiVideo />
          <span>3/3 aulas</span>
        </div>

        <div>
          <FiClock />
          <span>100/100 minutos</span>
        </div>
      </ContainerInfo>

      <button type="button">Assistir aula</button>
    </Container>
  );
}

export { CardClasses };
