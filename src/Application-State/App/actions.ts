
export const UpdateMessage = () => async (dispatch: any) => {
    dispatch({type: 'updateMessage', payload: {isError: false, message: ''}})
}
