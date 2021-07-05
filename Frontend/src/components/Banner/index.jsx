import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

function Banner(props) {
  const history = useHistory();

  const handleOnClickLogo = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <img src={logoImg} alt="logo" onClick={handleOnClickLogo} />

      <h1>Fazer {props.subject}</h1>
    </Container>
  );
}

export { Banner };
