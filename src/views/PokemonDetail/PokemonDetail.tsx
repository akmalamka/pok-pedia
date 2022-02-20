import React from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import { Pokemons } from "./components";

const PokemonList = (): JSX.Element => (
	<Main colorInvert={true}>
		<Container>
			<Pokemons />
		</Container>
	</Main>
);

export default PokemonList;
