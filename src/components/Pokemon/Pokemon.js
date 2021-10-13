/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getPokemonFromApi } from "../../services";
import Loader from "../Loader";
import * as S from "./PokemonStyles";
import gobackIcon from "../../assets/goBack.svg";
import weightIcon from "../../assets/weight_icon.svg";
import heightIcon from "../../assets/height_icon.svg";

const Pokemon = ({ goBack }) => {
  const [loading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [getAnother, setGetAnother] = useState(true);

  const getPokemonData = async () => {
    if (getAnother) {
      try {
        setIsLoading(true);
        const random = Math.floor(Math.random() * 800);
        const data = await getPokemonFromApi(random);
        setPokemon(data);
        setIsLoading(false);
        setGetAnother(false);
      } catch (e) {
        console.log("falhas");
      }
    }
  };

  const handleGetAnother = () => {
    setGetAnother(true);
  };

  useEffect(() => {
    getPokemonData();
  }, [getAnother]);

  return (
    <S.Container>
      {loading && <Loader size="lg" />}

      {!loading && (
        <S.PokemonCard types={pokemon.types}>
          <S.Header>
            <S.HeaderRight onClick={goBack}>
              <img src={gobackIcon} alt="Go back icon" />
              <h2>{pokemon.name}</h2>
            </S.HeaderRight>

            <S.HeaderLeft># {pokemon.order}</S.HeaderLeft>
          </S.Header>

          <S.ImageContainer
            url={pokemon.imageUrl}
            isPng={pokemon.isPng}
          >
            {!pokemon.isPng && (
              <img
                alt={pokemon.name}
                src={pokemon.imageUrl}
              />
            )}
          </S.ImageContainer>

          <S.CardInfo>
            <S.Types>
              {pokemon.types.map((t, index) => (
                <S.Type type={t} key={index.toString()}>
                  {" "}
                  {t}{" "}
                </S.Type>
              ))}
            </S.Types>

            <S.SubTitle type={pokemon.types[0]}>
              About
            </S.SubTitle>

            <S.Characteristics>
              <S.Characteristic>
                <span>
                  <img
                    src={weightIcon}
                    alt="Icone represantando o peso"
                  />
                  {pokemon.weight / 10} Kg
                </span>
                <p>Weight</p>
              </S.Characteristic>

              <S.Characteristic>
                <span>
                  <img
                    src={heightIcon}
                    alt="Icone represantando a altura"
                  />
                  {pokemon.height / 10} m
                </span>
                <p>Height</p>
              </S.Characteristic>

              <S.Characteristic>
                {pokemon.moves.map((m, index) => (
                  <p
                    className="moves"
                    key={index.toString()}
                  >
                    {m}
                  </p>
                ))}
                <p>Moves</p>
              </S.Characteristic>
            </S.Characteristics>
            <S.Button
              types={pokemon.types}
              onClick={handleGetAnother}
              disabled={getAnother}
            >
              Get Another Pokemon
            </S.Button>
          </S.CardInfo>
        </S.PokemonCard>
      )}
    </S.Container>
  );
};

export default Pokemon;
