import React from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import { Pokemons } from "./components";
import { Heading } from "blocks";

const PokemonList = (): JSX.Element => {
	return (
		<Main colorInvert={true}>
			<Heading />
			<Container>
				<Pokemons />
			</Container>
		</Main>
	);
};

export default PokemonList;
