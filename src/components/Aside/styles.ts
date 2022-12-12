import styled, { css } from 'styled-components';
import Button from '../Button';
import { StylingProps } from './types';

export const Container = styled.div<StylingProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme: { color, box, spacing }, isOpen }) => css`
    background-color: ${color.background};
    box-shadow: ${box.shadowBottomRight};
    color: ${color.black};
    padding: ${spacing.medium} ${spacing.small};

    ${isOpen
      ? css`
          align-items: center;
        `
      : ''}
  `}
  grid-area: AS;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledButton = styled(Button)<StylingProps>`
  ${({ theme: { spacing }, isOpen }) => css`
    ${isOpen
      ? css`
          margin-bottom: ${spacing.large};
          width: 4rem;
        `
      : css`
          width: 100%;
        `}
  `}

  svg {
    font-size: 18px;
  }
`;
