import React from "react";
import Header from "../../components/Header";
import PokeList from "../../components/PokeList";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <Header />
      <PokeList />
    </S.Container>
  );
}
// REfactoring
export default Home;
