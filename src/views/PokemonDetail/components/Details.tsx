import React, { useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import { ButtonComponent } from "blocks";
import { titleCase } from "blocks/PokemonCard/PokemonCard";
import { AppContext } from "context/AppProvider";
import { ActionTypes } from "context/ActionTypes";

const GET_POKEMON = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			height
			weight
			sprites {
				front_default
			}
			abilities {
				ability {
					name
				}
			}
			moves {
				move {
					name
				}
			}
			types {
				type {
					name
				}
			}
			stats {
				base_stat
				stat {
					name
				}
			}
			message
			status
		}
	}
`;

const Details = (): JSX.Element => {
	const theme = useTheme();
	const MIN = 0;
	const MAX = 255;
	const normalize = (value) => ((value - MIN) * 100) / (MAX - MIN);
	const isXs = useMediaQuery(theme.breakpoints.down("sm"), {
		defaultMatches: true,
	});
	const router = useRouter();
	const { pokemon_name } = router.query;
	const gqlVariables = {
		name: pokemon_name,
	};
	const [openGif, setOpenGif] = useState(false);
	const { state, dispatch } = useContext(AppContext);

	function randomWithProbability() {
		var notRandomNumbers = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		var idx = Math.floor(Math.random() * notRandomNumbers.length);
		return notRandomNumbers[idx];
	}

	const onClickCatch = (name: string, image: string) => {
		setOpenGif(true);
		setTimeout(() => {
			const rand = randomWithProbability();
			if (rand) {
				Swal.fire({
					title: "You catch it!",
					input: "text",
					icon: "success",
					inputPlaceholder: "Enter your pokemon nickname",
					confirmButtonText: "Add to My Pokemon",
					allowOutsideClick: false,
					inputValidator: (value) => {
						const isNicknameExist =
							typeof state.pokemons.find(
								(pokemon) => pokemon.nickname === value
							) !== "undefined";
						if (value && !isNicknameExist) {
							dispatch({
								type: ActionTypes.ADD_POKEMON,
								payload: {
									name: name,
									nickname: value,
									image: image,
								},
							});
						} else {
							if (isNicknameExist) {
								return `Try another name, you already have ${value}!`;
							}
							return "You need to write something!";
						}
					},
				}).then(function(value) {
					Swal.fire({
						title: `${value.value} added to your pokemon`,
						icon: "success",
						confirmButtonText: "See My Pokemon",
					}).then(function() {
						window.location.href = "/my-pokemon";
					});
				});
			} else {
				Swal.fire("Failed!", "You are not lucky this time :(", "error");
			}
			setOpenGif(false);
		}, 3000);
	};

	const { loading, error, data } = useQuery(GET_POKEMON, {
		variables: gqlVariables,
	});

	if (loading) return <Typography>Loading...</Typography>;
	if (error) return <Typography>`Error! ${error.message}`</Typography>;
	const {
		name,
		sprites,
		types,
		height,
		weight,
		moves,
		abilities,
		stats,
	} = data.pokemon;

	return (
		<Box>
			<Box
				component={Card}
				px={1}
				sx={{
					borderRadius: 2,
					"& .lazy-load-image-loaded": {
						display: "flex !important",
					},
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Box
							component={CardContent}
							display={"flex"}
							justifyContent={"center"}
						>
							<Typography
								variant={"h3"}
								fontWeight={700}
								align={"center"}
								gutterBottom
							>
								{titleCase(name.replaceAll("-", " "))}
							</Typography>
						</Box>
						<Box
							component={LazyLoadImage}
							height={1}
							width={1}
							src={
								sprites.front_default
									? sprites.front_default
									: "/default-avatar.png"
							}
							alt="..."
							effect="blur"
							minHeight={{ xs: 50, sm: 125, md: 200 }}
							sx={{
								transition: "transform .7s ease !important",
								transform: "scale(1.0)",
								objectFit: "cover",
								filter:
									theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
							}}
						/>
						<Box
							component={CardContent}
							display={"flex"}
							justifyContent={"center"}
						>
							{types.map((type, i, data) => (
								<Typography variant={"h5"} align={"center"} gutterBottom>
									{titleCase(type.type.name)}
									{i < data.length - 1 && "+"}
								</Typography>
							))}
						</Box>
						<Box display={"flex"}>
							<Box
								display={"flex"}
								justifyContent={"center"}
								width={"50%"}
								flexDirection={"column"}
							>
								<Typography variant={"h5"} align={"center"} gutterBottom>
									Height
								</Typography>
								<Typography variant={"h6"} align={"center"} gutterBottom>
									{height * 10} cm
								</Typography>
							</Box>
							<Box
								display={"flex"}
								justifyContent={"center"}
								width={"50%"}
								flexDirection={"column"}
							>
								<Typography variant={"h5"} align={"center"} gutterBottom>
									Weight
								</Typography>
								<Typography variant={"h6"} align={"center"} gutterBottom>
									{weight / 10} kg
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={8}>
						<Box
							component={CardContent}
							display={"flex"}
							flexDirection={"column"}
						>
							<Typography variant={"h4"} align={"center"} gutterBottom>
								Moves
							</Typography>
							<Box
								display={"flex"}
								justifyContent={"center"}
								columnGap={2}
								rowGap={1}
								flexWrap={"wrap"}
							>
								{moves.map((move) => (
									<Chip
										color={"primary"}
										variant={"outlined"}
										label={
											<Typography variant={"button"} color={"text.primary"}>
												{move.move.name}
											</Typography>
										}
										sx={{ p: 1 }}
									/>
								))}
							</Box>
						</Box>
						<Box
							component={CardContent}
							display={"flex"}
							flexDirection={"column"}
						>
							<Typography variant={"h4"} align={"center"} gutterBottom>
								Abilities
							</Typography>
							<Box
								display={"flex"}
								justifyContent={"center"}
								columnGap={2}
								rowGap={1}
								flexWrap={"wrap"}
							>
								{abilities.map((ability) => (
									<Chip
										color={"primary"}
										variant={"outlined"}
										label={
											<Typography variant={"button"} color={"text.primary"}>
												{ability.ability.name}
											</Typography>
										}
										sx={{ p: 1 }}
									/>
								))}
							</Box>
						</Box>
						<Box
							component={CardContent}
							display={"flex"}
							flexDirection={"column"}
						>
							<Typography variant={"h4"} align={"center"} gutterBottom>
								Statistics
							</Typography>
							<Box
								display={"flex"}
								justifyContent={"center"}
								flexDirection={"column"}
								rowGap={2}
							>
								{stats.map((statistic) => (
									<Box
										display={"flex"}
										justifyContent={"space-between"}
										alignItems={"center"}
									>
										<Box width={"40%"}>
											<Typography variant={"h6"} align={"left"}>
												{titleCase(statistic.stat.name.replaceAll("-", " "))} :{" "}
												{statistic.base_stat}
											</Typography>
										</Box>

										<Box width={"60%"}>
											<LinearProgress
												variant="determinate"
												value={normalize(statistic.base_stat)}
												sx={{ height: 10, borderRadius: 5 }}
											/>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
						<Box
							component={CardContent}
							display={"flex"}
							justifyContent={"center"}
							width={1}
							sx={{
								bottom: 10,
								right: 0,
								left: 0,
								position: isXs ? "fixed" : "relative",
							}}
						>
							<ButtonComponent
								text={"Catch"}
								onClick={() => onClickCatch(name, sprites.front_default)}
							/>
						</Box>
						{openGif && (
							<Box
								component={CardContent}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								width={1}
								sx={{
									bottom: 0,
									top: 0,
									right: 0,
									left: 0,
									position: "fixed",
								}}
							>
								<Box
									component={LazyLoadImage}
									height={1}
									width={1}
									src={
										"https://c.tenor.com/MMDa60lTwtIAAAAC/caught-pokemon.gif"
									}
									alt="..."
									effect="blur"
									maxHeight={{ xs: 150, sm: 250, md: 400 }}
								/>
							</Box>
						)}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Details;
