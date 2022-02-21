import { PokemonActions, PokemonType } from "context/types";

export const pokemonReducer = (
	state: PokemonType[],
	action: PokemonActions
) => {
	switch (action.type) {
		case "ADD_POKEMON":
			return [
				...state,
				{
					name: action.payload.name,
					nickname: action.payload.nickname.toLowerCase(),
					image: action.payload.image,
				},
			];
		case "RELEASE_POKEMON":
			return [
				...state.filter(
					(pokemon) =>
						pokemon.nickname.toLowerCase() !==
						action.payload.nickname.toLowerCase()
				),
			];
		default:
			return state;
	}
};
