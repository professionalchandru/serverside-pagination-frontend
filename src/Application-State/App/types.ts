export type ApplicationType = {
    loading: boolean,
    isError: boolean,
    message: string
}

type ToggleAppLoading = {
    type: "toggleAppLoading",
    payload: {
        loading: boolean
    }
}

type UpdateMessage = {
    type: "updateMessage",
    payload: {
        isError: boolean,
        message: string
    }
}

export type AppActions = ToggleAppLoading | UpdateMessage