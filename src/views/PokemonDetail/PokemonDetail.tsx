import React from "react";
import Box from "@mui/material/Box";

import Main from "layouts/Main";
import Container from "components/Container";
import { Folio, Hero } from "./components";

const PokemonList = (): JSX.Element => (
	<Main colorInvert={true}>
		<Container>
			<Folio />
		</Container>
	</Main>
);

export default PokemonList;
