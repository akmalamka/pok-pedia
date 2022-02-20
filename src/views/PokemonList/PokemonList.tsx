import React from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import { Pokemons } from "./components";
import { Heading } from "blocks";

interface Props {
	isMyPokemon: boolean;
}

const PokemonList = ({ isMyPokemon }: Props): JSX.Element => (
	<Main colorInvert={true}>
		<Heading isMyPokemon={isMyPokemon} />
		<Container>
			<Pokemons isMyPokemon={isMyPokemon} />
		</Container>
	</Main>
);

export default PokemonList;
