import styled, { css, keyframes } from 'styled-components';

const move = keyframes`
   0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-1rem);
            transform: translateY(-1rem);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme: { color } }) => color.background};
`;
export const Dot = styled.div<{ delay: string }>`
  ${({ theme: { color, box } }) => css`
    box-shadow: ${box.shadow};
    background-color: ${color.primary};
  `}

  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin: 1.5rem;
  animation: ${move} 0.5s ease-in-out infinite alternate-reverse both;
  animation-delay: ${(props) => props.delay};
`;
