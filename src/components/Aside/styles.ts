import styled, { css } from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme: { color, box, spacing } }) => css`
    background-color: ${color.background};
    box-shadow: ${box.shadowBottomRight};
    color: ${color.black};
    padding: ${spacing.medium} ${spacing.small};
  `}
  grid-area: AS;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;

  svg {
    font-size: 18px;
  }
`;
