import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme: { color, spacing } }) => `
      background-color: ${color.background};
      color: ${color.black};
      padding: ${spacing.large} ${spacing.medium};
`}
  grid-area: C;
`;
