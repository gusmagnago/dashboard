import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme: { color, spacing } }) => `
      background-color: ${color.background};
      color: ${color.black};
      padding: ${spacing.large} ${spacing.medium};
`}

  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  grid-area: C;
`;
