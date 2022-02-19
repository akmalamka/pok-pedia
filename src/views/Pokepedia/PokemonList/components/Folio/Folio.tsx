import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import { ReactComponent as PokeballAsset } from "svg/pokeball.svg";
import Image from "next/image";

const mock = [
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		description: "Electric toothbrush, designed for you",
		title: "Goby",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		description: "Just do it",
		title: "Nike",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		description: "Curology custom skincare",
		title: "Curology",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		description: "The world's best bikes and cycling gear",
		title: "Trek",
		color: "#04AB0F",
	},
];

const Folio = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box>
			<Grid container spacing={2}>
				{mock.map((item, i) => (
					<Grid key={i} item xs={12} sm={4} md={3}>
						<Box display={"flex"} justifyContent={"flex-end"} columnGap={2}>
							<Typography variant={"h6"} fontWeight={700} align={"right"}>
								4
							</Typography>
							<Image src="/pokeball.svg" height={30} width={30} />
						</Box>
						<Box
							sx={{
								position: "relative",
								overflow: "hidden",
								borderRadius: 2,
								"&:hover": {
									"& img": {
										transform: "scale(1.1)",
									},
								},
								"& .lazy-load-image-loaded": {
									display: "flex !important",
								},
							}}
						>
							<Box
								component={LazyLoadImage}
								// display={"flex"}
								// justifyContent={"center"}
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
							// position={"absolute"}
							// bottom={0}
							// left={0}
							// right={0}
							// paddingX={3}
							// paddingY={{ xs: 3, md: 2 }}
							// sx={{
							// 	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
							// }}
							>
								<Typography
									variant={"h4"}
									fontWeight={700}
									// sx={{ color: "common.white" }}
								>
									{item.title}
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Folio;
