export const getPokemonFromApi = async (key) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${key}`
  );
  if (response.ok) {
    const {
      height,
      types,
      stats,
      sprites,
      order,
      weight,
      moves,
      name,
    } = await response.json();

    let isPng = false;

    let imageUrl =
      sprites?.other?.dream_world?.front_default;
    if (!imageUrl) {
      imageUrl =
        sprites?.other["official-artwork"]?.front_default;
    }

    if (!imageUrl) {
      imageUrl = sprites?.front_default;
      isPng = true;
    }

    return {
      order,
      name,
      height,
      imageUrl,
      types: types.map((t) => t.type.name),
      stats,
      weight,
      isPng,
      moves: moves.map((m) => m.move.name).slice(0, 2),
    };
  } else {
    throw new Error("Pokemon não encontrado");
  }
};
