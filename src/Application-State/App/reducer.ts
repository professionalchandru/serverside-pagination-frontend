import { State } from "./state";
import { AppActions, ApplicationType } from "./types";

export const AppReducer = (state = State, action: AppActions): ApplicationType => {
    switch (action.type) {
        case "toggleAppLoading":
            return{
                ...state,
                loading: action.payload.loading
            }

        case 'updateMessage':
            return{
                ...state,
                isError: action.payload.isError,
                message: action.payload.message
            }
        
        default:
            return state;
    }
}