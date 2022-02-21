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
					nickname: action.payload.nickname,
					image: action.payload.image,
				},
			];
		case "RELEASE_POKEMON":
			return [
				...state.filter(
					(pokemon) => pokemon.nickname !== action.payload.nickname
				),
			];
		default:
			return state;
	}
};
