import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Image from "next/image";

const mock = [
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Goby",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Nike",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
		title: "Curology",
		color: "#04AB0F",
	},
	{
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
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
						<Box
							component={Card}
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
								justifyContent={"flex-end"}
								columnGap={2}
							>
								<Typography variant={"h6"} fontWeight={700} align={"right"}>
									4
								</Typography>
								<Image src="/pokeball.svg" height={30} width={30} />
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
							<Box component={CardContent}>
								<Typography variant={"h4"} fontWeight={700} gutterBottom>
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
