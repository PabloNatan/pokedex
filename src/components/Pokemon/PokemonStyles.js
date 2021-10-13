import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
`;

const getBgColor = (theme, types) => {
  if (types.length > 1) {
    return css`
      background-image: linear-gradient(
        to bottom right,
        ${theme.colorType[types[0]]},
        ${theme.colorType[types[1]]}
      );
    `;
  }
  return css`
    background-color: ${theme.colorType[types[0]]};
  `;
};

export const PokemonCard = styled.div`
  ${({ theme, types }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.md}px;
    ${getBgColor(theme, types)};

    @media screen and (min-width: 768px) {
      padding: 20px calc((100vw - 960px) / 2);
      padding-top: ${theme.spacings.lg}px;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.lg}px;
  `}
`;

export const HeaderRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.md}px;
    cursor: pointer;

    img {
      width: 25px;
    }

    h2 {
      color: ${theme.colors.white};
      font-weight: bold;
      text-transform: capitalize;
      font-size: ${theme.fontSize.lg}px;
    }

    @media screen and (min-width: 768px) {
      img {
        width: 35px;
      }

      h2 {
        font-size: ${theme.fontSize.xg}px;
      }
    }
  `}
`;

export const HeaderLeft = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg}px;
    color: ${theme.colors.white};
    font-weight: bold;

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSize.xg}px;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ url, isPng }) =>
    isPng
      ? css`
          width: 80vw;
          max-width: 300px;
          height: 200px;
          background-image: url(${url});
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;
        `
      : css`
          img {
            width: 80vw;
            min-height: 300px;
            max-width: 400px;
            max-height: 300px;
          }

          @media screen and (min-width: 768px) {
            img {
              min-height: 400px;
            }
          }
        `}

  position: relative;
  z-index: 101;
  align-self: center;
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.spacings.md}px;
    flex: 1;
    padding-top: ${theme.spacings.md}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:before {
      border-top-left-radius: ${theme.spacings.md}px;
      border-top-right-radius: ${theme.spacings.md}px;
      content: "";
      background-color: ${theme.colors.white};
      height: 70px;
      width: 100%;
      position: absolute;
      z-index: 100;
      top: -60px;
    }

    .moves {
      font-weight: bold;
    }
  `}
`;

export const Types = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.md}px;

    p {
    }
  `}
`;

export const Type = styled.p`
  ${({ theme, type }) => css`
    background-color: ${theme.colorType[type]};
    color: ${theme.colors.white};
    border-radius: ${theme.spacings.sm}px;
    font-weight: bold;
    padding: 3px 10px;
    font-size: ${theme.fontSize.sm}px;

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSize.md}px;
    }
  `}
`;

export const SubTitle = styled.h4`
  ${({ theme, type }) => css`
    color: ${theme.colorType[type]};
    margin: ${theme.spacings.md}px 0;

    @media screen and (min-width: 768px) {
      margin: ${theme.spacings.lg}px 0;
      font-size: ${theme.fontSize.lg}px;
      font-weight: bold;
    }
  `}
`;

export const Characteristics = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  > div:nth-child(2) {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0 ${({ theme }) => theme.spacings.md}px;
  }
`;

export const Characteristic = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100% / 3);
    p {
      font-size: ${theme.fontSize.sm}px;
      color: ${theme.colors.gray};
    }

    span {
      font-size: ${theme.fontSize.md}px;
      color: ${theme.colors.gray};
      gap: ${theme.spacings.sm}px;
      display: flex;
      align-items: center;
      font-weight: bold;
    }

    @media screen and (min-width: 768px) {
      p {
        font-size: ${theme.fontSize.md}px;
      }
      span {
        font-size: ${theme.fontSize.lg}px;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, types, disabled }) => css`
    margin-top: ${theme.spacings.xg}px;
    padding: ${theme.spacings.md}px ${theme.spacings.xg}px;
    position: absolute;
    bottom: 20px;
    border: none;
    border-radius: ${theme.spacings.md}px;
    color: ${theme.colors.white};
    font-weight: bold;
    cursor: pointer;
    ${getBgColor(theme, types)};
    ${disabled &&
    css`
      background-color: ${theme.colors.gray};
    `}

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSize.lg}px;
    }
  `}
`;
