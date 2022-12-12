import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  grid-area: H;
  justify-content: flex-end;

  ${({ theme: { color, spacing, media } }) => css`
    background-color: ${color.background};
    color: ${color.black};
    border-bottom: 0.2rem solid ${color.bright};
    padding: ${spacing.xs};
    ${media.gteSmall} {
      padding: ${spacing.medium} ${spacing.small};
      align-items: center;
    }
  `}
  z-index: 1;
`;
