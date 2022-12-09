import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  grid-area: H;
  justify-content: flex-end;

  ${({ theme: { color, spacing } }) => `
      background-color: ${color.background};
      color: ${color.black};
      border-bottom: 2px solid ${color.white};
      padding: ${spacing.xs};
`}
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 9rem;
  }
  p {
    font-size: 18px;
  }
`;
