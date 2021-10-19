import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import * as S from "./styles";
import Loader from "../Loader";
import Modal from "../Modal";
import { getPokemonFromApi } from "../../services";

function PokemonCard({ name }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getPokemonData = useCallback(async () => {
    try {
      const data = await getPokemonFromApi(name);
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [name]);

  useEffect(() => {
    getPokemonData();
  }, [getPokemonData]);

  const loader = (
    <S.LoadContainer>
      <Loader size="lg" />
    </S.LoadContainer>
  );

  return (
    <>
      <S.Container
        color={pokemon?.types[0]}
        onClick={handleToggleModal}
      >
        {loading && loader}

        {pokemon && (
          <>
            <S.PokemonInfo>
              <p>#{pokemon.order}</p>
              <p>{pokemon.name}</p>
              <div>
                {pokemon.types.map((type) => (
                  <S.TagType type={type}>{type}</S.TagType>
                ))}
              </div>
            </S.PokemonInfo>
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
            />
          </>
        )}
      </S.Container>
      {modalIsOpen && (
        <Modal pokemon={pokemon} closeModal={closeModal} />
      )}
    </>
  );
}

export default PokemonCard;
