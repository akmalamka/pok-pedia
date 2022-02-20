import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ButtonComponent, PokemonCard } from "blocks";

interface Props {
	isMyPokemon: boolean;
}

const GET_POKEMONS = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			count
			next
			previous
			status
			message
			results {
				name
				image
			}
		}
	}
`;

const gqlVariables = {
	limit: 10,
	offset: 1,
};

const Pokemons = ({ isMyPokemon }: Props): JSX.Element => {
	const theme = useTheme();
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: gqlVariables,
	});
	if (loading) return <Typography>Loading...</Typography>;
	if (error) return <Typography>`Error! ${error.message}`</Typography>;
	return (
		<Box>
			<Grid container spacing={2}>
				{data.pokemons.results.map((item, i) => (
					<Grid key={i} item xs={12} sm={4} md={3}>
						<PokemonCard
							title={item.name}
							image={item.image}
							isMyPokemon={isMyPokemon}
						/>
					</Grid>
				))}
			</Grid>
			<Box display={"flex"} justifyContent={"center"} m={{ xs: 2, md: 4 }}>
				<ButtonComponent text={"Load More Pokèmons"} />
			</Box>
		</Box>
	);
};

export default Pokemons;
