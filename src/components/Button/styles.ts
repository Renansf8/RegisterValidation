import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
