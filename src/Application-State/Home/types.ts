export type HomeState = {
    totalPages: number,
    currentPage: number,
    totalRecord: number,
    emailData: []
}

type SetDataList = {
    type: 'setDataList',
    payload: {
        emailData: [],
        totalPages: number
        currentPage: number,
        totalRecords: number
    }
}

type UpdateEmail = {
    type: 'updateEmail',
    payload: {
        oldEmail: string
        newEmail: string,
    }
}

export type HomeActions = SetDataList | UpdateEmail