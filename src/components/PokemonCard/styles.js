import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, color }) => css`
    background-color: ${theme.colorType[color]}90;
    border-radius: ${theme.spacings.md}px;
    max-height: 200px;
    height: 150px;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: ${`${theme.spacings.md}px ${theme.spacings.lg}px`};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    img {
      cursor: pointer;
      height: 120%;
      max-width: 60%;
      max-height: 150px;
      transition: transform 0.5s, filter 0.5s;
      transform: translateY(-40px);
      filter: grayscale(0.5);
    }

    &:hover {
      img {
        transition: transform 0.5s, filter 0.5s;
        transform: translateY(-15px);
        filter: grayscale(0);
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: fit-content;
      max-height: none;

      img {
        transform: none;
        margin-top: ${theme.spacings.md}px;
        filter: none;
        align-self: center;
      }
    }
  `}
`;

export const LoadContainer = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonInfo = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.md}px;
    > p:first-of-type {
      font-size: ${theme.fontSize.lg}px;
      letter-spacing: 2px;
      color: rgba(23, 23, 27, 0.6);
      font-weight: bold;
      grid-area: order;
    }

    > p:nth-child(2) {
      font-size: ${theme.fontSize.xg}px;
      color: #fff;
      font-weight: bold;
      text-transform: capitalize;
      grid-area: name;
    }

    > div {
      display: flex;
      gap: ${theme.spacings.md}px;
      margin-top: ${theme.spacings.sm}px;
      grid-area: type;
      justify-self: flex-start;
    }

    @media screen and (max-width: 769px) {
      display: grid;
      grid-template-columns: 0fr 1fr;
      align-items: center;
      column-gap: 10px;
      grid-template-areas:
        "order name"
        "type type";

      > div {
        margin: 0;
      }
    }
  `}
`;

export const TagType = styled.div`
  padding: 5px 10px;
  color: #fff;
  background-color: ${({ theme, type }) =>
    theme.colorType[type]};
  font-weight: bold;

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    padding: 2px 8px;
  }
`;
