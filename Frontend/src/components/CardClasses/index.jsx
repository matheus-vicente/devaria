import { format } from 'date-fns';
import { FiVideo, FiClock } from 'react-icons/fi';

import { useModule } from '../../hooks/module';

import { ButtonWatchClasses } from '../ButtonWatchClasses';

import { Container, Header, ContainerInfo } from './styles';

function CardClasses({ lesson }) {
  const { selectedModule } = useModule();

  const date = new Date(lesson.classDate);
  const formatedDate = format(date, "'Dia:' dd/MM/YYY", { timeZone: 'America/Sao_Paulo' })

  return (
    <Container>
      <Header>
        <div>{selectedModule.name}</div>

        <span>3/3</span>
      </Header>

      <strong>{lesson.name}</strong>

      <span className="class-date">{formatedDate}</span>

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

      <ButtonWatchClasses />
    </Container>
  );
}

export { CardClasses };
