import React, { createContext, useReducer, Dispatch } from "react";
import {
	PokemonActions,
	pokemonReducer,
	UserActions,
	userReducer,
} from "./reducers";

export type UserType = {
	isMyPokemon: boolean;
};

type statsType = {
	name: string;
	base_stat: number;
};

export type PokemonType = {
	id: number;
	name: string;
	nickname: string;
	types: string[];
	height: number;
	weight: number;
	moves: string[];
	abilities: string[];
	stats: statsType[];
};

export type InitialStateType = {
	user: UserType;
	pokemons: PokemonType[];
};
const initialState = {
	user: { isMyPokemon: null },
	pokemons: [],
};

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<UserActions | PokemonActions>;
}>({
	state: initialState,
	dispatch: () => null,
});

const mainReducer = ({ user, pokemons }: InitialStateType, action: any) => ({
	user: userReducer(user, action),
	pokemons: pokemonReducer(pokemons, action),
});

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
