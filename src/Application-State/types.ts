import { ThunkDispatch } from "redux-thunk"
import { HomeActions, HomeState } from "./Home/types"
import { AppActions, ApplicationType as Appstate } from "./App/types"

export type ApplicationAction = HomeActions

export type DispatchType = ThunkDispatch<AppState, any, ApplicationAction> 

export type AppState = {
    app: Appstate,
    home: HomeState
}