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

interface Props {
	image: string;
	title: string;
}

export const mock = [
	{
		title: "Front-End Developer",
		location: "Madrid",
		type: "Remote",
		team: "Consumer",
		subtitle: "Responsible for design systems and brand management.",
	},
	{
		title: "Community Manager",
		location: "Paris",
		type: "Full time",
		team: "Consulting",
		subtitle: "Responsible for creating life in our apps.",
	},
];

const PokemonCard = ({ image, title }: Props): JSX.Element => {
	const theme = useTheme();
	return (
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
				src={image}
				alt="..."
				effect="blur"
				minHeight={{ xs: 50, sm: 125, md: 200 }}
				sx={{
					transition: "transform .7s ease !important",
					transform: "scale(1.0)",
					objectFit: "cover",
					filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
				}}
			/>
			<Box component={CardContent}>
				<Typography variant={"h4"} fontWeight={700} gutterBottom>
					{title}
				</Typography>
			</Box>
		</Box>
	);
};

export default PokemonCard;
