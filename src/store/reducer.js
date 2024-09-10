import { SET_PREDICTED_VALUE, SET_DATA_PREDICT, SET_RESET } from "./constants"


const initState = {
    dataPredict: [],
    reset: false,
    predictedValue: "",
}

function reducer(state, action) {

    switch (action.type) {
        case SET_DATA_PREDICT: {       
            console.log(action);
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
        default:
            throw new Error("Invalid Action");  
    }
}

export { initState }
export default reducer