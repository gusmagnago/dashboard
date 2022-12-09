import styled, { css } from 'styled-components';
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

export const Button = styled.button<StylingProps>`
  padding: 0.5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme: { color, box, spacing }, isOpen }) => css`
    border: 1px solid ${color.disabled};
    box-shadow: ${box.shadowBottomRight};
    color: ${color.black};

    &:active {
      box-shadow: ${box.innerShadow};
    }

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
