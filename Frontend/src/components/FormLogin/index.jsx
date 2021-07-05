import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from 'unform';

import { useAuth } from '../../hooks/auth';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';

function FormLogin() {
  const history = useHistory();
  const { login } = useAuth();

  const handleOnClickButtonSignIn = useCallback(() => {
    history.push('/cadastrar');
  }, [history]);

  const handleSubmit = useCallback(async (data) => {
    try {
      await login(
        data.email,
        data.password,
      );

      history.push('/area-do-usuario');
    } catch (error) {
      console.log(error);
    }
  }, [history]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit" className="button-login">Entrar</Button>

        <Button type="button" onClick={handleOnClickButtonSignIn}>Cadastre-se</Button>
      </Form>
    </Container>
  )
}

export { FormLogin };
