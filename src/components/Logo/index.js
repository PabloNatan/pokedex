import React from "react";
import * as S from "./styles";
import pokeball from "../../assets/pokeball.svg";

function Logo() {
  return (
    <S.Logo>
      <img src={pokeball} alt="Pokeball" />
      <p>Pokédex</p>
    </S.Logo>
  );
}

export default Logo;
