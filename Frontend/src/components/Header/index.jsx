import { FaUserCircle } from 'react-icons/fa';

import logoImg from '../../assets/logo.svg';

import { ButtonLogin } from '../ButtonLogin';

import { Container, Content, MenuContainer } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <MenuContainer>
          <a href="#">Calendário de aulas</a>
          <ButtonLogin icon={FaUserCircle}>Entrar</ButtonLogin>
        </MenuContainer>
      </Content>
    </Container>
  );
}

export { Header }
