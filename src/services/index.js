export const getPokemonFromApi = async (key) => {
  try {
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

      return {
        order,
        name,
        height,
        imageUrl:
          sprites.other.dream_world.front_default ||
          sprites.front_default,
        types: types.map((t) => t.type.name),
        stats,
        weight,
        moves: moves.map((m) => m.move.name).slice(0, 2),
      };
    } else {
      throw new Error("Pokemon não encontrado");
    }
  } catch (e) {
    console.log(e);
  }
};
