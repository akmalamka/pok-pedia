import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Main from "layouts/Main";
import Container from "components/Container";

const NotFound = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});

	return (
		<Main>
			<Box
				sx={{
					width: 1,
					height: 1,
					overflow: "hidden",
				}}
			>
				<Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
					<Box
						display={"flex"}
						flexDirection={{ xs: "column", md: "row" }}
						position={"relative"}
					>
						<Box
							width={1}
							order={{ xs: 2, md: 1 }}
							display={"flex"}
							alignItems={"center"}
							sx={{ minHeight: { xs: "auto", md: "calc(100vh - 58px)" } }}
						>
							<Container>
								<Box>
									<Typography
										variant="h1"
										component={"h1"}
										align={isMd ? "left" : "center"}
										sx={{ fontWeight: 700 }}
									>
										404
									</Typography>
									<Typography
										variant="h6"
										component="p"
										color="text.secondary"
										align={isMd ? "left" : "center"}
									>
										Oops! Looks like you followed a bad link.
									</Typography>
									<Box
										marginTop={4}
										display={"flex"}
										justifyContent={{ xs: "center", md: "flex-start" }}
									>
										<Button
											component={Link}
											variant="contained"
											color="primary"
											size="large"
											href={"/"}
										>
											Back home
										</Button>
									</Box>
								</Box>
							</Container>
						</Box>
					</Box>
				</Container>
			</Box>
		</Main>
	);
};

export default NotFound;
