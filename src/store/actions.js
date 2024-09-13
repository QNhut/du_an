import { SET_PREDICTED_VALUE, SET_DATA_PREDICT, SET_RESET, SET_ACTIVE_TAB_LEFT, SET_STUDENT_ID } from "./constants"


export const setPredictedValue = (payload) => ({
    type: SET_PREDICTED_VALUE,
    payload
})

export const setDataPredict = (payload) => ({
    type: SET_DATA_PREDICT,
    payload,
})

export const setReset = (payload) => ({
    type: SET_RESET,
    payload
})

export const setActiveTabLeft = (payload) => ({
    type: SET_ACTIVE_TAB_LEFT,
    payload
})

export const setStudentID = (payload) => ({
    type: SET_STUDENT_ID,
    payload
})