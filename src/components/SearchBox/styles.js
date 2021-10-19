import styled, { css, keyframes } from "styled-components";

const showIn = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;
export const Container = styled.div`
  grid-area: search;
  justify-self: end;

  .error {
    position: relative;
    z-index: 1;
    font-size: 12px;
    color: #dc3545;
    margin-top: 5px;
    animation: ${showIn} 0.8s;
  }
`;

export const Input = styled.div`
  justify-self: end;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  input {
    width: 100%;
    height: 30px;
    padding-left: 15px;
    border: none;
  }
  input:focus {
    border: none;
  }

  input:focus-visible {
    outline: none;
  }

  button {
    height: 30px;
    border: none;
    padding: 0 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    justify-self: center;
  }
`;

export const Placeholder = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;

    p {
      font-size: ${theme.fontSize.sm}px;
      color: ${theme.colors.gray};
    }

    img {
      width: 25px;
      height: 25px;
      margin-right: ${theme.spacings.sm};
    }
  `}
`;

export const LoadContainer = styled.div`
  margin-right: 10px;
`;
