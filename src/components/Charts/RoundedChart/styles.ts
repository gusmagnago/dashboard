import styled, { css } from 'styled-components';

import { Cell } from 'recharts';

export const Container = styled.div`
  ${({ theme: { box, spacing } }) => css`
    padding: ${spacing.small} ${spacing.medium};
    border-radius: 10px;
    margin-top: ${spacing.large};
    box-shadow: ${box.shadow};
  `}
  height: 500px;
  width: 50%;
`;
export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Wrapper = styled.ul`
  list-style: none;
`;
export const Subs = styled.li`
  display: flex;
  align-items: center;
`;
export const PieWrapper = styled.div`
  display: flex;
`;

export const StyledCell = styled(Cell)`
  ${({ theme: { box } }) => css`
    box-shadow: ${box.shadow};
  `}
`;
