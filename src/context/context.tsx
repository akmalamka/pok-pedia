import React, { createContext, useReducer, Dispatch } from "react";
import ContextDevTool from "react-context-devtool"; // remove dari library
import {
	PokemonActions,
	pokemonReducer,
	UserActions,
	userReducer,
} from "./reducers";

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
AppContext.displayName = "Context Display Name";
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
