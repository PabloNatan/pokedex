import React, { useState } from "react";
import Pokemon from "../../components/Pokemon/Pokemon";
import * as S from "./styles";

import logo from "../../assets/logo.png";

function Home() {
  const [showPokemon, setShowPokemon] = useState(false);

  const handleClickShowPokemon = () => {
    setShowPokemon(true);
  };

  const handleClose = () => {
    setShowPokemon(false);
  };

  return (
    <>
      {!showPokemon && (
        <S.Container>
          <img src={logo} alt="Logo pokemon" />
          <S.Button onClick={handleClickShowPokemon}>
            Get a random Pokémon
          </S.Button>
        </S.Container>
      )}

      {showPokemon && <Pokemon goBack={handleClose} />}
    </>
  );
}

export default Home;
