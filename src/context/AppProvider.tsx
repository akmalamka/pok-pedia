import React, { createContext, useReducer, Dispatch, useEffect } from "react";
import ContextDevTool from "react-context-devtool"; // remove dari library
import { pokemonReducer } from "./reducers/pokemonReducer";
import { userReducer } from "./reducers/UserReducer";
import { InitialStateType, PokemonActions, UserActions } from "./types";

const APP_STATE_NAME = "state";
const getFromStorage = (key) => {
	if (typeof window !== "undefined") {
		window.localStorage.getItem(key);
	}
};

const initialState: InitialStateType = JSON.parse(
	typeof window !== "undefined" && window.localStorage.getItem(APP_STATE_NAME)!
)
	? JSON.parse(
			typeof window !== "undefined" &&
				window.localStorage.getItem(APP_STATE_NAME)!
	  )
	: {
			user: { isMyPokemon: null },
			pokemons: [],
	  };

// const initialState = {
// 	user: { isMyPokemon: null },
// 	pokemons: [],
// };

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<UserActions | PokemonActions>;
}>({
	state: initialState,
	dispatch: () => null,
});
AppContext.displayName = "Pokepedia Context"; // nanti remove
const mainReducer = ({ user, pokemons }: InitialStateType, action: any) => ({
	user: userReducer(user, action),
	pokemons: pokemonReducer(pokemons, action),
});

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	useEffect(() => {
		//Update the localstorage after detected change
		window.localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
	}, [state]);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
export { AppProvider, AppContext };
