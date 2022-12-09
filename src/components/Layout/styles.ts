import styled from 'styled-components';
import { StylingProps } from './types';

export const Wrapper = styled.div<StylingProps>`
  display: grid;
  grid-template-columns: ${({ isOpen }) => (isOpen ? '300px' : '80px')} auto;
  grid-template-rows: 80px auto;
  grid-template-areas:
    'AS H'
    'AS C';

  height: 100vh;
  width: 100%;
`;
