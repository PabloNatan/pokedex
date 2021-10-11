import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
