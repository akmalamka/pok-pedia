import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

const mock = [
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Goby",
		color: "#04AB0F",
		types: ["Normal", "Ground"],
		moves: ["Cut", "Bind", "Double Edge", "Return"],
		abilities: ["Sniper", "Bind", "Suction Cups", "Return"],
		statistics: [
			{ name: "HP", value: 150 },
			{ name: "Attack", value: 50 },
			{ name: "Defense", value: 75 },
			{ name: "Special Attack", value: 150 },
			{ name: "Special Defense", value: 175 },
			{ name: "Speed", value: 200 },
		],
	},
];

const Folio = (): JSX.Element => {
	const theme = useTheme();
	const MIN = 0;
	const MAX = 255;
	const normalize = (value) => ((value - MIN) * 100) / (MAX - MIN);
	const isXs = useMediaQuery(theme.breakpoints.down("sm"), {
		defaultMatches: true,
	});
	return (
		<Box>
			{mock.map((item, i) => (
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
						<Grid item xs={12} sm={3} md={4}>
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
									{item.title}
								</Typography>
							</Box>
							<Box
								component={LazyLoadImage}
								height={1}
								width={1}
								src={item.image}
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
								{item.types.map((type, i, data) => (
									<Typography variant={"h5"} align={"center"} gutterBottom>
										{type}
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
										30 cm
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
										4 kg
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={9} md={8}>
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
									{item.moves.map((move, i) => (
										<Chip
											color={"primary"}
											variant={"outlined"}
											label={
												<Typography variant={"button"} color={"text.primary"}>
													{move}
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
									Ability
								</Typography>
								<Box
									display={"flex"}
									justifyContent={"center"}
									columnGap={2}
									rowGap={1}
									flexWrap={"wrap"}
								>
									{item.abilities.map((ability, i) => (
										<Chip
											color={"primary"}
											variant={"outlined"}
											label={
												<Typography variant={"button"} color={"text.primary"}>
													{ability}
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
									{item.statistics.map((statistic, i) => (
										<Box
											display={"flex"}
											justifyContent={"space-between"}
											alignItems={"center"}
										>
											<Box width={"40%"}>
												<Typography variant={"h6"} align={"left"}>
													{statistic.name} : {statistic.value}
												</Typography>
											</Box>

											<Box width={"60%"}>
												<LinearProgress
													variant="determinate"
													value={normalize(statistic.value)}
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
								<ButtonComponent text={"Catch"} />
							</Box>
						</Grid>
					</Grid>
				</Box>
			))}
		</Box>
	);
};

export default Folio;
