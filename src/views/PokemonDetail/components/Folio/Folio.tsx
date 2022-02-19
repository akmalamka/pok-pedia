import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const mock = [
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Goby",
		color: "#04AB0F",
		types: ["Normal", "Ground"],
		moves: ["Cut", "Bind", "Double Edge", "Return"],
		abilities: ["Sniper", "Bind", "Suction Cups", "Return"],
	},
];

const Folio = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Grid container spacing={2}>
				{mock.map((item, i) => (
					<Grid key={i} item xs={12} sm={4} md={3}>
						<Box
							component={Card}
							px={1}
							sx={{
								borderRadius: 2,
								"& .lazy-load-image-loaded": {
									"&:hover": {
										"& img": {
											transform: "scale(1.1)",
										},
									},
									display: "flex !important",
								},
							}}
						>
							<Box
								component={CardContent}
								display={"flex"}
								justifyContent={"space-between"}
							>
								<Chip
									color={"primary"}
									variant={"outlined"}
									label={
										<Typography variant={"button"} color={"text.primary"}>
											30 cm
										</Typography>
									}
									sx={{ p: 1 }}
								/>
								<Typography
									variant={"h3"}
									fontWeight={700}
									align={"center"}
									gutterBottom
								>
									{item.title}
								</Typography>
								{/* <Avatar sx={{ width: 50, height: 50 }}>
									<Typography variant={"button"} color={"text.primary"}>
										4 kg
									</Typography>
								</Avatar> */}
								<Chip
									color={"primary"}
									variant={"outlined"}
									label={
										<Typography variant={"button"} color={"text.primary"}>
											4 kg
										</Typography>
									}
									sx={{ p: 1 }}
								/>
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
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Folio;
