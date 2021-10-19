import styled, { css } from "styled-components";

export const Container = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.lg}px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    button {
      padding: 5px 20px;
      justify-self: center;
      align-self: center;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
  `}
`;

export const LoadContainer = styled.div`
  min-height: 70vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px 20px;
  margin: 0 calc(50% - 60px);
  width: 120px;
  margin-top: 30px;
  background-color: aqua;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
