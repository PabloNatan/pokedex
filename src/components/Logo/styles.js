import styled, { css } from "styled-components";

export const Logo = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    grid-area: logo;
    font-size: 28px;

    img {
      width: 50px;
      height: 50px;
      margin-right: ${theme.spacings.md}px;
    }

    @media screen and (max-width: 768px) {
      font-size: ${theme.fontSize.lg}px;
      margin-bottom: ${theme.spacings.md}px;
      img {
        width: 25px;
        height: 25px;
        margin-right: ${theme.spacings.md}px;
      }
    }
  `}
`;
