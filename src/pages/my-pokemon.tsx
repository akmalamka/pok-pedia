import React, { useEffect, useContext } from "react";
import { AppContext } from "context/AppProvider";
import { PokemonList } from "views";
import { ActionTypes } from "context/ActionTypes";

const IndexPage = (): JSX.Element => {
	const { state, dispatch } = useContext(AppContext);
	useEffect(() => {
		dispatch({
			type: ActionTypes.CHANGE_IS_MY_POKEMON,
			payload: {
				isMyPokemon: true,
			},
		});
	}, []);
	return <PokemonList />;
};

export default IndexPage;
