import styled, { css } from 'styled-components';

const largePadding = css`
  padding: ${({ theme: { spacing } }) =>
    css`
      ${spacing.small} ${spacing.medium};
    `};
`;

export const TableWrapper = styled.table`
  ${({ theme: { box, spacing } }) => css`
    ${largePadding}
    border-radius: 10px;
    margin-top: ${spacing.large};
    box-shadow: ${box.shadow};
  `}
  width: 100%;
  min-height: 20rem;
`;

export const TableHeader = styled.thead`
  border-radius: 10px;
  ${({ theme: { box } }) => css`
    box-shadow: ${box.shadow};
  `}
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
