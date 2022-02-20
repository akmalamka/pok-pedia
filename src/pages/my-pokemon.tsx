import React from "react";
import { PokemonList } from "views";

const IndexPage = (): JSX.Element => {
	return <PokemonList isMyPokemon={true} />;
};

export default IndexPage;
