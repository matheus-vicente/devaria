import { FaUserCircle } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';

import { Container } from './styles';

function CardUser() {
  const { user, turnAdmin } = useAuth();

  return (
    <Container>
      <FaUserCircle size={60} />

      <strong>{user.name}</strong>

      {
        user.admin ?
          <span>Admin</span>
        :
          <Button type="button" onClick={turnAdmin}>Tornar Admin</Button>
      }
    </Container>
  );
}

export { CardUser };
