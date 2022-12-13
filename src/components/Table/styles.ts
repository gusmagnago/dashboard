import styled, { css } from 'styled-components';

const largePadding = css`
  padding: ${({ theme: { spacing } }) =>
    css`
      ${spacing.small} ${spacing.medium};
    `};
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  height: 450px;

  ${({ theme: { spacing } }) => css`
    padding: ${spacing.small} 0;
  `}
`;

export const TableContainer = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
  border-radius: 10px;
  ${({ theme: { box, color } }) => css`
    box-shadow: ${box.shadow};
    background-color: ${color.background};
  `}
  position: sticky;
  top: 0;
`;

export const HeaderCell = styled.th`
  text-align: center;

  ${largePadding}

  ${({ theme: { media, spacing } }) => css`
    ${media.lteMedium} {
      font-size: 15px;
      padding: ${spacing.xs} ${spacing.small};
    }
  `}
`;

export const TableBody = styled.tbody`
  height: auto;
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  border-radius: 5px;

  ${({ theme: { color, spacing, media } }) => css`
    border-bottom: 1px solid ${color.grey};
    border-right: 1px solid ${color.grey};

    ${largePadding}
    ${media.lteMedium} {
      font-size: 14px;
      padding: ${spacing.xs};
    }
  `}
`;
