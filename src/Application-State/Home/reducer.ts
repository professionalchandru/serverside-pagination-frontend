import { HomeActions } from "./types";

export const HomeReducer = (state = [], action: HomeActions) => {
    switch (action.type) {
        case "setDataList":
            return{
                emailData: action.payload.emailData,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
                totalRecords: action.payload.totalRecords
            }
            
        case "updateEmail":
            if(true){
                // @ts-ignore
                state?.emailData.forEach((data:any) => data.email === action.payload.oldEmail ? 
                    (data.email = action.payload.newEmail, data.updatedAt = new Date().toLocaleString()) : null)
            }
            return state

        default:
            return state;
    }
}