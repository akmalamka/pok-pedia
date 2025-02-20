import React, { useState, useEffect, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { ButtonComponent, PokemonCard } from 'blocks';
import { AppContext } from 'context/AppProvider';
import Container from 'components/Container';

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

const Pokemons = (): JSX.Element => {
  const theme = useTheme();
  const { state } = useContext(AppContext);
  const [page, setPage] = useState(1);

  const handleChangePagination = (event, value) => {
    setPage(value);
  };
  const LIMIT = 20;

  const gqlVariables = {
    limit: LIMIT,
    offset: 1 + LIMIT * (page - 1),
  };
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  const [pokemonData, setPokemonData] = useState([]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>`Error! ${error.message}`</Typography>;

  const onClickLoadMore = () => {
    setPage(page + 1);
    // setPokemonData(pokemonData.concat(data.pokemons.results));
  };

  const ownedArr = state.pokemons.map((item) => {
    return item.name;
  });
  let counts = {};
  for (const name of ownedArr) {
    counts[name] = counts[name] ? counts[name] + 1 : 1;
  }

  // 	if (!loading) {
  // 		setPokemonData(data.pokemons.results);
  // 	}
  // }, [loading]);

  const paginationLogic = () => {
    return (
      (state.user.isMyPokemon && state.pokemons.length > LIMIT) ||
      !state.user.isMyPokemon
    );
  };

  return (
    <Box>
      {state.user.isMyPokemon && state.pokemons.length == 0 && (
        <Container>
          <Typography
            variant="h5"
            color="text.primary"
            align={'center'}
            gutterBottom
          >
            You don't have any pokemon yet. Try to catch it!
          </Typography>
          <Box display={'flex'} justifyContent={'center'}>
            <ButtonComponent
              text={`Catch ${state.pokemons.length > 0 ? 'More' : ''} Pokemon`}
              href={'/'}
            />
          </Box>
        </Container>
      )}
      <Grid container spacing={2}>
        {(state.user.isMyPokemon ? state.pokemons : data.pokemons.results).map(
          (item, i) => (
            <Grid key={i} item xs={12} sm={4} md={3}>
              <PokemonCard
                name={item.name}
                image={item.image}
                nickname={state.user.isMyPokemon && item.nickname}
                count={counts[item.name] ? counts[item.name] : 0}
              />
            </Grid>
          ),
        )}
      </Grid>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        rowGap={2}
        m={{ xs: 2, sm: 4, md: 8 }}
      >
        {/* <ButtonComponent
					text={"Load More Pokèmons"}
					onClick={onClickLoadMore}
				/> */}
        {paginationLogic() && (
          <Pagination
            count={Math.ceil(data.pokemons.count / LIMIT)}
            page={page}
            color="primary"
            onChange={handleChangePagination}
          />
        )}
      </Box>
    </Box>
  );
};

export default Pokemons;
