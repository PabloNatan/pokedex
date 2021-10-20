/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import * as S from "./styles";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextLink, setNextLink] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [getMore, setGetMore] = useState(true);

  const getPokemons = async () => {
    const result = await fetch(nextLink);
    if (result.ok) {
      const data = await result.json();
      setNextLink(data?.next);
      setPokemons((prev) => [...prev, ...data?.results]);
      setGetMore(false);
    }
  };

  const handleGetMore = () => {
    if (!getMore) {
      setGetMore(true);
    }
  };

  useEffect(() => {
    if (getMore) {
      getPokemons();
    }
  }, [getMore]);

  return (
    <>
      <S.Container id="list">
        {pokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} />
        ))}
      </S.Container>
      {pokemons && (
        <S.Button onClick={handleGetMore}>
          Show more
        </S.Button>
      )}
    </>
  );
}

export default PokeList;
