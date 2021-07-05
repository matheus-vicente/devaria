import { FaUserCircle } from 'react-icons/fa';

import { Container } from './styles';

function CardUser() {
  return (
    <Container>
      <FaUserCircle size={60} />

      <strong>Matheus Ferreira da Silva Vicente</strong>

      <span>Admin</span>
    </Container>
  );
}

export { CardUser };
