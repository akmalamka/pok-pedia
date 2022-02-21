import { PokemonType, UserType } from "./context";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

//Pokemon

export enum Types {
	Add = "ADD_POKEMON",
	Release = "RELEASE_POKEMON",
}

type PokemonPayload = {
	[Types.Add]: PokemonType;
	[Types.Release]: {
		nickname: string;
	};
};

export type PokemonActions = ActionMap<PokemonPayload>[keyof ActionMap<
	PokemonPayload
>];

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

//User
export enum Types {
	Change = "CHANGE_IS_MY_POKEMON",
}

type UserPayload = {
	[Types.Change]: UserType;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: UserType, action: UserActions) => {
	switch (action.type) {
		case "CHANGE_IS_MY_POKEMON":
			return {
				isMyPokemon: action.payload.isMyPokemon,
			};

		default:
			return state;
	}
};
