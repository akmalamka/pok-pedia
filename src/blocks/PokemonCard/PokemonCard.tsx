import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { ButtonComponent } from "blocks";
import { AppContext } from "context/AppProvider";
import { ActionTypes } from "context/ActionTypes";

interface Props {
	image: string;
	name: string;
	nickname?: string;
	count?: number;
}

export function titleCase(str) {
	var splitStr = str.toLowerCase().split(" ");
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] =
			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(" ");
}

const PokemonCard = ({ image, name, nickname, count }: Props): JSX.Element => {
	const theme = useTheme();
	const router = useRouter();
	const { state, dispatch } = useContext(AppContext);

	const onClickButton = () => {
		if (state.user.isMyPokemon) {
			Swal.fire({
				title: `Are you sure you wanna release ${nickname}?`,
				text: "You will not be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, release it!",
				cancelButtonText: "No, cancel!",
			}).then(function(result) {
				if (result.isConfirmed) {
					dispatch({
						type: ActionTypes.RELEASE_POKEMON,
						payload: {
							nickname: nickname,
						},
					});
					Swal.fire({
						title: `${nickname} has been deleted`,
						icon: "success",
					});
				}
			});
		} else {
			router.push(`/${name.toLowerCase()}`);
		}
	};

	return (
		<Box
			component={Card}
			px={1}
			sx={{
				borderRadius: 2,
				"& .lazy-load-image-loaded": {
					"&:hover": {
						"& img": {
							transform: state.user.isMyPokemon ? "none" : "scale(1.1)",
							cursor: state.user.isMyPokemon ? "" : "pointer",
						},
					},
					display: "flex !important",
				},
			}}
		>
			<Box
				component={CardContent}
				display={"flex"}
				justifyContent={state.user.isMyPokemon ? "space-between" : "flex-end"}
			>
				{state.user.isMyPokemon && (
					<Box component={"div"}>
						<Chip
							color={"primary"}
							variant={"outlined"}
							label={
								<Typography variant={"button"} color={"text.primary"}>
									{titleCase(name.replaceAll("-", " "))}
								</Typography>
							}
							sx={{ p: 1 }}
						/>
					</Box>
				)}
				{!state.user.isMyPokemon && (
					<Box display={"flex"} columnGap={2}>
						<Typography variant={"h6"} fontWeight={700} align={"center"}>
							{count}
						</Typography>
						<Image src="/pokeball.svg" height={30} width={30} />
					</Box>
				)}
			</Box>
			<Box
				component={LazyLoadImage}
				height={1}
				width={1}
				src={image}
				alt="..."
				effect="blur"
				minHeight={{ xs: 50, sm: 125, md: 200 }}
				onClick={state.user.isMyPokemon ? undefined : onClickButton}
				sx={{
					transition: "transform .7s ease !important",
					transform: "scale(1.0)",
					objectFit: "cover",
				}}
			/>
			<Box component={CardContent}>
				<Typography
					variant={"h4"}
					fontWeight={700}
					gutterBottom
					align={"center"}
				>
					{titleCase(
						(state.user.isMyPokemon ? nickname : name).replaceAll("-", " ")
					)}
				</Typography>
				<Box display={"flex"} justifyContent={"center"}>
					<ButtonComponent
						text={state.user.isMyPokemon ? "Release" : "See Details"}
						onClick={onClickButton}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default PokemonCard;
