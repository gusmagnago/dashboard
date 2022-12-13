import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.medium};
  &:first-of-type {
    margin-bottom: ${({ theme: { spacing } }) => spacing.medium};
  }
`;

export const Input = styled.input`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;

  ${({ theme: { spacing, box, color } }) => css`
    border: 2px solid ${color.background};
    margin-right: ${spacing.small};
    box-shadow: ${box.shadow}, ${box.innerShadow};
  `}

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.8rem;
    height: 0.8rem;
    transform: translate(-50%, -50%) scale(0);
    display: flex;
    border-radius: 50%;
    transition: transform 200ms;
    background-color: ${({ theme: { color } }) => color.primary};
  }

  &:checked::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Label = styled.label`
  text-transform: capitalize;
`;
