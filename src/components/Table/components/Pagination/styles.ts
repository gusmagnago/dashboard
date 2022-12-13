import { spacing } from './../../../../styles/themes/utils';
import styled, { css } from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-direction: row;

  ${({ theme: { spacing } }) => css`
    margin-top: ${spacing.small};
  `}
`;
