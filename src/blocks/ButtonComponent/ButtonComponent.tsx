import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

interface Props {
	text: string;
	[x: string]: any;
}

const ButtonComponent = ({ text, ...rest }: Props): JSX.Element => {
	const theme = useTheme();
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{
				borderRadius: 30,
				my: 1,
				// "&:hover": {
				// 	transform: `translateY(-${theme.spacing(1 / 3)})`,
				// },
			}}
			{...rest}
		>
			<Typography
				variant="button"
				sx={{
					textTransform: "uppercase",
					letterSpacing: 1.2,
					// fontWeight: 400,
				}}
			>
				{text}
			</Typography>
		</Button>
	);
};

export default ButtonComponent;
