import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "context/AppProvider";

interface Props {
	text: string;
	[x: string]: any;
}

const ButtonComponent = ({ text, ...rest }: Props): JSX.Element => {
	const theme = useTheme();
	const { state } = useContext(AppContext);
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{
				borderRadius: 30,
				my: 1,
				"&:hover": {
					transform: `translateY(-${theme.spacing(1 / 3)})`,
				},
			}}
			{...rest}
		>
			<Typography
				variant="button"
				sx={{
					textTransform: "uppercase",
					letterSpacing: 1.2,
				}}
			>
				{text}
			</Typography>
		</Button>
	);
};

export default ButtonComponent;
