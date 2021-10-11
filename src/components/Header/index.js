import React, { useState } from "react";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import * as S from "./styles";
import random from "../../assets/random.png";
import Modal from "../Modal";
import { getPokemonFromApi } from "../../services";

function Header() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getRadomPokemon = async () => {
    const random = Math.floor(Math.random() * 700);
    const pokemon = await getPokemonFromApi(random);
    setRandomPokemon(pokemon);
    setModalOpen(true);
  };
  return (
    <>
      <S.Container>
        <Logo />
        <SearchBox />
        <S.SortIcon
          src={random}
          onClick={getRadomPokemon}
        />
      </S.Container>
      {randomPokemon && modalOpen && (
        <Modal
          pokemon={randomPokemon}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default Header;
