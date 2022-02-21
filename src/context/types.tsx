import { ActionMap, ActionTypes } from "./ActionTypes";

export type UserType = {
	isMyPokemon: boolean;
};

export type PokemonType = {
	name: string;
	nickname: string;
	image: string;
};

export type InitialStateType = {
	user: UserType;
	pokemons: PokemonType[];
};

type PokemonPayload = {
	[ActionTypes.ADD_POKEMON]: PokemonType;
	[ActionTypes.RELEASE_POKEMON]: {
		nickname: string;
	};
};

export type PokemonActions = ActionMap<PokemonPayload>[keyof ActionMap<
	PokemonPayload
>];

type UserPayload = {
	[ActionTypes.CHANGE_IS_MY_POKEMON]: UserType;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
