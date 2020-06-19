import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />

        <Input name="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Password" />

        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
