import { useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

import { ButtonLogin } from '../ButtonLogin';
import { Button } from '../Button';

import { Container, Content, MenuContainer } from './styles';

function Header() {
  const history = useHistory();
  const { user, logout } = useAuth();

  const handleOnClickButtonLogin = useCallback(() => {
    history.push('/entrar');
  }, [history]);

  const handleOnClickButtonLogout = useCallback(async () => {
    await logout();
  }, [history]);

  const handleOnClickButtonUser = useCallback(() => {
    history.push('/area-do-usuario');
  }, [history]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" onClick={() => history.push('/')} />

        <MenuContainer>
          <Link to="/">Calendário de aulas</Link>

          {
            !!user ?(
              <>
                <ButtonLogin
                  icon={FaUserCircle}
                  onClick={handleOnClickButtonUser}
                  isLogged
                >
                  {user.name}
                </ButtonLogin>
                <Button
                  className="button-logout"
                  onClick={handleOnClickButtonLogout}
                >
                  Sair
                </Button>
              </>
            ) : <ButtonLogin onClick={handleOnClickButtonLogin}>Entrar</ButtonLogin>
          }
        </MenuContainer>
      </Content>
    </Container>
  );
}

export { Header }
