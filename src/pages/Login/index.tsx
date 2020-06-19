import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Authentication App" />

      <form>
        <h1>Faça seu login</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Password" />

        <button type="submit">Entrar</button>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Content>

    <Background />
  </Container>
);

export default Login;
