import React, { useRef, useState } from "react";
import * as S from "./styles";
import searchIcon from "../../assets/search_icon.svg";
import Modal from "../Modal";
import Loader from "../Loader";
import { getPokemonFromApi } from "../../services";

function SearchBox() {
  const [showPlaceholder, setShowPlaceHolder] =
    useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(null);
  const [hasError, setHasError] = useState(false);

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const showPlaceHolder = () => {
    setShowPlaceHolder(true);
  };

  const handleFocus = () => {
    setShowPlaceHolder(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTextChange = (e) => {
    if (hasError) {
      setHasError(false);
    }
    setText(e.target.value);
  };

  const getPokemonData = async (name) => {
    try {
      const data = await getPokemonFromApi(name);
      setPokemon(data);
      setModalIsOpen(true);
    } catch (e) {
      console.log(e);
      setHasError(true);
    }
    setLoading(false);
  };

  const handleClickSearch = () => {
    if (text) {
      setLoading(true);
      setModalIsOpen(true);
      getPokemonData(text);
    }
  };

  return (
    <>
      <S.Container>
        <S.Input>
          {showPlaceholder && !text && (
            <S.Placeholder onClick={focusInput}>
              <img src={searchIcon} alt="Icone de lupa" />
              <p>Procurar</p>
            </S.Placeholder>
          )}
          <input
            ref={inputRef}
            onBlur={showPlaceHolder}
            onFocus={handleFocus}
            onChange={handleTextChange}
          />
          {loading && (
            <S.LoadContainer>
              <Loader size="sm" />
            </S.LoadContainer>
          )}
          <button onClick={handleClickSearch}>
            Buscar
          </button>
        </S.Input>
        {hasError && (
          <p className="error">Pokemon não encontrado</p>
        )}
      </S.Container>
      {modalIsOpen && pokemon && (
        <Modal pokemon={pokemon} closeModal={closeModal} />
      )}
    </>
  );
}

export default SearchBox;
