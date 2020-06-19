import styled from 'styled-components';
import { shade } from 'polished';

import loginBackgroundImg from '../../assets/login-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;

  img {
    height: 90px;

    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 22px;
      font-weight: 500;

      margin-bottom: 12px;
      color: #62b5bb;
    }

    input {
      width: 250px;
      height: 40px;

      font-size: 15px;
      color: #a49e9b;

      border-radius: 20px;
      border: 2px solid #62b5bb;

      margin-bottom: 25px;
      padding: 16px;
    }

    button {
      width: 250px;
      height: 40px;

      font-size: 15px;
      background: #62b5bb;

      border-radius: 20px;
      border: 2px solid #62b5bb;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#62b5bb')};
      }
    }

    a {
      text-decoration: none;

      margin-top: 20px;
      color: #62b5bb;
      font-weight: 500;

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackgroundImg}) no-repeat center;
  background-size: cover;
`;
