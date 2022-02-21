import { UserActions, UserType } from "context/types";

export const userReducer = (state: UserType, action: UserActions) => {
	switch (action.type) {
		case "CHANGE_IS_MY_POKEMON":
			return {
				isMyPokemon: action.payload.isMyPokemon,
			};

		default:
			return state;
	}
};
