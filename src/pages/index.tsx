import React, { useEffect, useContext } from "react";
import { AppContext } from "context/context";
import { PokemonList } from "views";
import { Types } from "context/reducers";

const IndexPage = (): JSX.Element => {
	const { state, dispatch } = useContext(AppContext);
	useEffect(() => {
		dispatch({
			type: Types.Change,
			payload: {
				isMyPokemon: false,
			},
		});
	}, []);

	return <PokemonList />;
};

export default IndexPage;
