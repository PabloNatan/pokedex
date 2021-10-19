import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, color }) => css`
    width: 500px;
    background-color: white;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    align-self: center;
    z-index: 100;
    border-radius: ${theme.spacings.md}px;
    background-color: ${theme.colorType[color]};
    padding: 5px;
    display: flex;
    flex-direction: column;

    h2 {
      color: ${theme.colorType[color]};
      text-align: center;
      font-size: ${theme.fontSize.md}px;
    }

    @media screen and (max-width: 768px) {
      width: 100vw;
      transform: none;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 0;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    h3 {
      color: #fff;
      font-weight: bold;
      font-size: ${theme.fontSize.lg}px;
    }

    > span {
      font-size: ${theme.fontSize.lg}px;
      font-weight: bold;
      color: #fff;
    }

    > div {
      display: flex;

      img {
        width: 20px;
        margin-right: ${theme.spacings.md}px;
        cursor: pointer;
      }
    }
  `}
`;

export const Image = styled.img`
  max-width: 50%;
  min-width: 100px;
  min-height: 200px;
  position: relative;
  transform: translateY(40px);
  z-index: 2;
  justify-self: center;
  align-self: center;
  margin: 0 auto;
`;

export const CardInfo = styled.div`
  ${({ theme, color }) => css`
    padding-top: 60px;
    background-color: white;
    border-radius: ${theme.spacings.md}px;

    display: flex;

    flex-direction: column;
    align-items: center;

    div:first-of-type {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    @media screen and (max-width: 768px) {
      width: calc(100% - 10px);
      height: 100%;
    }
  `}
`;

export const TagType = styled.div`
  ${({ theme, type }) => css`
    padding: 5px 10px;
    color: #fff;
    font-size: ${theme.fontSize.sm}px;
    background-color: ${theme.colorType[type]};
    font-weight: bold;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
      border-radius: 5px;
      padding: 0px 8px;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.lg}px;
    width: 100%;
    align-items: center;
  `}
`;

export const Characteristics = styled.div`
  ${({ theme }) => css`
    margin: 20px 0;
    height: 60px;
    display: flex;
    justify-content: space-around;
    padding: 0 30px;
    div {
      width: 33.3%;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 ${theme.spacings.lg}px;
      padding-bottom: 0;
      padding-top: ${theme.spacings.sm}px;
      text-align: center;

      span {
        text-align: center;
        font-size: ${theme.fontSize.md}px;
        font-weight: bold;
        color: ${theme.colors.gray};
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        margin-right: ${theme.spacings.sm}px;
      }
    }

    & div:nth-child(2) {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
      border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    p {
      margin-top: ${theme.spacings.sm}px;
      font-size: ${theme.fontSize.sm}px;
      color: ${theme.colors.gray};
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      padding: 20px 10px;

      > div {
        padding-left: ${theme.spacings.sm}px;
        padding-right: ${theme.spacings.sm}px;
      }
    }
  `}
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  cursor: pointer;
`;

export const LoadContainer = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
