import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from 'unform';
import * as Yup from 'yup';

import { api } from '../../service/api';

import { Button } from '../Button';
import { Input } from '../Input';

import { Container } from './styles';

function FormSignUp() {
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    try {
      await api.post('users', data);

      history.push('/entrar');
    } catch (error) {
      console.log(error);
    }

  }, [useHistory]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit" className="button-sign-up">Cadastrar</Button>
      </Form>
    </Container>
  );
}

export { FormSignUp };
