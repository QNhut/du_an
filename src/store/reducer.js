import { SET_PREDICTED_VALUE, SET_DATA_PREDICT, SET_RESET, SET_ACTIVE_TAB_LEFT, SET_PREDICTED_VALUE_FINAL, SET_ANALYSIS_VALUE_FINAL, SET_DATA_PREDICT_FINAL } from "./constants"


const initState = {
    dataPredict: [],
    reset: false,
    predictedValue: "",
    activeTabLeft: 'tab1',
    studentID: "",
    predictedValueFinal: "",
    analysisValueFinal: [],
    dataPredictFinal: {}
}

function reducer(state, action) {

    switch (action.type) {
        case SET_DATA_PREDICT: {
            // console.log(action);
            if (action.payload === "clear") {
                return {
                    ...state,
                    dataPredict: []
                }
            }

            const existingIndex = state.dataPredict.findIndex(item => item.nameObject === action.payload.nameObject);

            if (existingIndex !== -1) {
                const updatedData = [...state.dataPredict];
                updatedData[existingIndex] = action.payload;
                return {
                    ...state,
                    dataPredict: updatedData,
                };
            } else {
                return {
                    ...state,
                    dataPredict: [...state.dataPredict, action.payload]
                }
            }
        }
        case SET_PREDICTED_VALUE:
            return {
                ...state,
                predictedValue: action.payload
            }
        case SET_RESET:
            return {
                ...state,
                reset: action.payload
            }
        case SET_ACTIVE_TAB_LEFT:
            return {
                ...state,
                activeTabLeft: action.payload
            }
        case SET_PREDICTED_VALUE_FINAL:
            return {
                ...state,
                predictedValueFinal: action.payload
            }
        case SET_ANALYSIS_VALUE_FINAL:
            return {
                ...state,
                analysisValueFinal: action.payload
            }
        case SET_DATA_PREDICT_FINAL:
            return {
                ...state,
                dataPredictFinal: action.payload
            }
        default:
            throw new Error("Invalid Action");
    }
}

export { initState }
export default reducer