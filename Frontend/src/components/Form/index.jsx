import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../Input';

import { Container } from './styles';

function Form() {
  return (
    <Container>
      <Input icon={FiMail} type="email" placeholder="E-mail" />

      <Input icon={FiLock} type="password" placeholder="Senha" />

      <button type="button" className="button-login" >Entrar</button>

      <button type="button">Cadastre-se</button>
    </Container>
  )
}

export { Form };
