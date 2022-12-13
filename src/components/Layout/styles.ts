import styled, { css } from 'styled-components';
import { StylingProps } from './types';

export const Wrapper = styled.div<StylingProps>`
  display: grid;
  grid-template-rows: 80px auto 100px;
  height: 100vh;
  max-width: 100vw;

  ${({ theme: { media } }) => css`
    ${media.gteMedium} {
      grid-template-areas:
        'AS H'
        'AS C';

      grid-template-rows: 80px auto;
      grid-template-columns: 80px auto;
    }
  `}
`;
