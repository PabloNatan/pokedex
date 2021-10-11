import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "logo search icon";
  align-items: center;
  margin-bottom: 60px;
  height: 100px;

  @media only screen and (max-width: 768px) {
    background-color: aliceblue;
    grid-template-areas:
      "logo logo icon"
      "search search search";
  }
`;

export const Header = styled.header``;

export const SortIcon = styled.img`
  grid-area: icon;
  justify-self: end;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-bottom: ${({ theme }) =>
      `${theme.spacings.md}px`};
    position: relative;
    top: -3px;
  }
`;
