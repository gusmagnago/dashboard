import styled, { css } from 'styled-components';
import { StylingProps } from './types';

export const Wrapper = styled.div<StylingProps>`
  display: grid;
  grid-template-areas:
    'H'
    'C'
    'AS';

  grid-template-rows: ${({ isOpen }) =>
    isOpen ? '80x 10px 100%' : '80px auto 100px'};
  height: 100vh;
  max-width: 100vw;

  ${({ theme: { media }, isOpen }) => css`
    ${media.gteMedium} {
      grid-template-areas:
        'AS H'
        'AS C';

      grid-template-rows: 80px auto;

      ${isOpen
        ? css`
            grid-template-columns: 200px auto;
          `
        : css`
            grid-template-columns: 80px auto;
          `}
    }
  `}
`;
