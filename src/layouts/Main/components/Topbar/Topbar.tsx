import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "svg/Logo";

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSidebarOpen: () => void;
	pages: Array<PageItem>;
	colorInvert?: boolean;
}

const Topbar = ({
	onSidebarOpen,
	pages,
	colorInvert = false,
}: Props): JSX.Element => {
	const theme = useTheme();
	const { mode } = theme.palette;

	const linkColor = "text.primary";

	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
			width={1}
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
			<Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
				{pages.map((item, i) => (
					<Box
						display={"flex"}
						alignItems={"center"}
						sx={{ cursor: "pointer" }}
						marginLeft={4}
					>
						<Button
							component={"a"}
							href={item.href}
							fullWidth
							sx={{
								justifyContent: "flex-start",
							}}
						>
							<Typography fontWeight={600} color={linkColor}>
								{item.title}
							</Typography>
						</Button>
					</Box>
				))}
			</Box>
			<Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
				<Button
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
					variant={"outlined"}
					sx={{
						borderRadius: 2,
						minWidth: "auto",
						padding: 1,
						borderColor: alpha(theme.palette.divider, 0.2),
					}}
				>
					<MenuIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default Topbar;
