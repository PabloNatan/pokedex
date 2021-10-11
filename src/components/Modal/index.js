import React from "react";
import * as S from "./styles";
import goBackIcon from "../../assets/goBack.svg";
import weightIcon from "../../assets/weight_icon.svg";
import heightIcon from "../../assets/height_icon.svg";
import Loader from "../Loader";

function Modal({ pokemon, closeModal, loading }) {
  return (
    <>
      <S.BackDrop onClick={closeModal} />
      <S.Container color={pokemon?.types[0]}>
        {loading && (
          <S.LoadContainer>
            <Loader />
          </S.LoadContainer>
        )}

        {!loading && (
          <>
            <S.Header>
              <div>
                <img
                  src={goBackIcon}
                  alt="icone de retorno"
                  onClick={closeModal}
                />
                <h3>{pokemon.name} </h3>
              </div>
              <span>#{pokemon.order}</span>
            </S.Header>

            <S.Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
            />

            <S.CardInfo>
              <div>
                {pokemon.types.map((type) => (
                  <S.TagType type={type}>{type}</S.TagType>
                ))}
              </div>

              <S.Description>
                <h2>About</h2>

                <S.Characteristics>
                  <div>
                    <span>
                      <img
                        src={weightIcon}
                        alt="Icone represantando o peso"
                      />
                      {pokemon.weight / 10} Kg
                    </span>
                    <p>Weight</p>
                  </div>

                  <div>
                    <span>
                      <img
                        src={heightIcon}
                        alt="Icone represantando a altura"
                      />
                      {pokemon.height / 10} m
                    </span>
                    <p>Height</p>
                  </div>

                  <div>
                    {pokemon.moves.map((m) => (
                      <span style={{ fontSize: "12px" }}>
                        {m}
                      </span>
                    ))}
                    <p>Moves</p>
                  </div>
                </S.Characteristics>
              </S.Description>
              {/* 
          <div>
            <h2>Base Stats</h2>
            <div></div>
          </div> */}
            </S.CardInfo>
          </>
        )}
      </S.Container>
    </>
  );
}

export default Modal;
