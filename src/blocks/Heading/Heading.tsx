import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";

import Container from "components/Container";
interface Props {
	isMyPokemon: boolean;
}

const Heading = ({ isMyPokemon }: Props): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});

	return (
		<Box
			sx={{
				backgroundImage: `linear-gradient(to bottom, ${alpha(
					theme.palette.background.paper,
					0
				)}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
				backgroundRepeat: "repeat-x",
				position: "relative",
			}}
		>
			<Box>
				<Container>
					<Box maxWidth={1}>
						<Typography
							variant="h2"
							color="text.primary"
							gutterBottom
							sx={{
								fontWeight: 700,
							}}
						>
							{isMyPokemon ? "My Pokèmon" : "Pokèmon List"}
						</Typography>
						<Typography
							variant="h6"
							component="p"
							color="text.secondary"
							sx={{ fontWeight: 400 }}
						>
							{isMyPokemon
								? "All of your catched pokemon listed here"
								: "Lookout for these adorable pokèmon!"}
						</Typography>
					</Box>
				</Container>
			</Box>
			<Box
				component={"svg"}
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 1920 100.1"
				sx={{
					width: "100%",
					marginBottom: theme.spacing(-1),
				}}
			>
				<path
					fill={theme.palette.background.paper}
					d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
				></path>
			</Box>
		</Box>
	);
};

export default Heading;
