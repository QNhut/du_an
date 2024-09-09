import { SET_PREDICTED_VALUE, SET_DATA_PREDICT, SET_RESET} from "./constants"


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