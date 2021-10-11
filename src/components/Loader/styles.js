import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const PokeballStyle = styled.img`
  ${({ theme, size }) => css`
    width: ${theme.loaderSize[size]}px;
    height: ${theme.loaderSize[size]}px;
    animation: ${spin} 2s linear infinite;
  `}
`;
