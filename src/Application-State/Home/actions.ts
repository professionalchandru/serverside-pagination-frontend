import axios from 'axios';


export const GetAllData = (pageNo:number) => async (dispatch: any) => {
    try {
        dispatch({type: 'toggleAppLoading', payload: {loading: true}});

        const res = await axios.get(`http://localhost:5000/getalldata?pageNo=${pageNo}`);

        if(!res.data) {
            console.log('Error Fetching Data');
            return;
        }

        dispatch({type: 'setDataList', payload: {
            emailData: res.data.data.message.data,
            currentPage: res.data.data.message.currentPage,
            totalPages: res.data.data.message.totalPages, 
            totalRecords: res.data.data.message.totalRecords
        }})

        dispatch({type: 'toggleAppLoading', payload: {loading: false}});


    }catch (err) {
        console.log("error", err);
        dispatch({type: 'updateMessage', payload: {isError: true, message: err}})
        dispatch({type: 'toggleAppLoading', payload: {loading: false}});
    }
}

export const UpdateEmail = (oldEmail: string, newEmail: string) => async (dispatch: any) => {
    try {
        dispatch({type: 'toggleAppLoading', payload: {loading: true}});

        const res = await axios.patch(`http://localhost:5000/update/${oldEmail}`, {email:newEmail});

        if(!res.data) {
            console.log('Error Fetching Data');
            dispatch({type: 'updateMessage', payload: {isError: true, message: "Error Fetching Data"}})
            return;
        }

        dispatch({type: 'updateEmail', payload: {
            oldEmail,
            newEmail
        }})

        dispatch({type: 'updateMessage', payload: {isError: false, message: res.data.data.message}})

        dispatch({type: 'toggleAppLoading', payload: {loading: false}});


    }catch (err) {
        console.log("error", err);
        dispatch({type: 'updateMessage', payload: {isError: true, message: err}})
        dispatch({type: 'toggleAppLoading', payload: {loading: false}});
    }
}