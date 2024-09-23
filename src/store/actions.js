import { SET_PREDICTED_VALUE, SET_DATA_PREDICT, SET_RESET, SET_ACTIVE_TAB_LEFT, SET_PREDICTED_VALUE_FINAL, SET_ANALYSIS_VALUE_FINAL, SET_DATA_PREDICT_FINAL } from "./constants"


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

export const setPredictedValueFinal = (payload) => ({
    type: SET_PREDICTED_VALUE_FINAL,
    payload
})

export const setAnalysisValueFinal = (payload) => ({
    type: SET_ANALYSIS_VALUE_FINAL,
    payload
})

export const setDataPredictFinal = (payload) => ({
    type: SET_DATA_PREDICT_FINAL,
    payload
})