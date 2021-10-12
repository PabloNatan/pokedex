import styled, { keyframes, css } from "styled-components";

const bgAnimation = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: linear-gradient(
    45deg,
    #ffcc02,
    #2774ba,
    #ffcc02,
    #2774ba
  );
  background-size: 500%;
  background-position: 0 0;
  animation: ${bgAnimation} 5s infinite alternate;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin: 100px 0;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 400px;
    }
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xg}px;
    padding: 10px 25px;
    border: none;
    background-color: ${theme.colors.blue};
    font-weight: bold;
    border-radius: ${theme.spacings.md}px;
    color: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSize.xg}px;
    }
  `}
`;
