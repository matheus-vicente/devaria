import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';

function Form() {
  return (
    <Container>
      <Input icon={FiMail} type="email" placeholder="E-mail" />

      <Input icon={FiLock} type="password" placeholder="Senha" />

      <Button type="button" className="button-login" >Entrar</Button>

      <Button type="button">Cadastre-se</Button>
    </Container>
  )
}

export { Form };
