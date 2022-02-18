import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Logo from "svg/Logo";

const Footer = (): JSX.Element => {
	const theme = useTheme();
	const { mode } = theme.palette;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					width={1}
					flexDirection={{ xs: "column", sm: "row" }}
				>
					<Box
						display={"flex"}
						component="a"
						href="/"
						title="theFront"
						width={80}
					>
						<Box
							display={"flex"}
							component="a"
							href="/"
							title="Pokepedia"
							width={{ xs: 100, md: 120 }}
						>
							<Logo width={"100%"} height={"100%"} />
						</Box>
					</Box>
					<Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
						<Box marginTop={1} marginRight={2}>
							<Link
								underline="none"
								component="a"
								href="/"
								color="text.primary"
								variant={"subtitle2"}
							>
								Pokemon List
							</Link>
						</Box>
						<Box marginTop={1} marginRight={2}>
							<Link
								underline="none"
								component="a"
								href="/my-pokemon"
								color="text.primary"
								variant={"subtitle2"}
							>
								My Pokemon List
							</Link>
						</Box>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Typography
					align={"center"}
					variant={"subtitle2"}
					color="text.secondary"
					gutterBottom
				>
					&copy; Pokepedia. 2021, All rights reserved
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
