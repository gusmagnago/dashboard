import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const Wrapper = styled.button<ButtonProps>`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme: { spacing, color, box }, disabled, variant }) => css`
    border: 0.1rem solid ${color.grey};
    box-shadow: ${box.buttonShadow};
    padding: ${spacing.xs} ${spacing.small};
    color: ${color.black};

    ${disabled
      ? css`
          background-color: ${color.disabled};
          box-shadow: ${box.innerShadow};
          cursor: not-allowed;
        `
      : css`
          &:active {
            box-shadow: ${box.innerShadow};
          }
        `}
  `}
`;
