import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { box, spacing } }) => css`
    padding: ${spacing.medium} ${spacing.large};
    border-radius: 10px;
    margin-top: ${spacing.large};
    box-shadow: ${box.shadow};
  `}

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
