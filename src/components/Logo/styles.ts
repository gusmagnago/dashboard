import { TfiDashboard } from 'react-icons/tfi';
import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme: { media } }) => css`
    width: 3rem;
    p {
      visibility: hidden;
    }
    ${media.gteSmall} {
      width: auto;
      p {
        visibility: visible;
      }
    }
  `}
`;

export const LogoIcon = styled(TfiDashboard)`
  font-size: 2rem;
  ${({ theme: { media } }) => css`
    ${media.largeDesk} {
      font-size: 5rem;
    }
    ${media.gteMedium} {
      font-size: 3rem;
    }
  `}
`;
