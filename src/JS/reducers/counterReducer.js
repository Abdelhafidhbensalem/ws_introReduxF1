import { ADD_INITIAL, DECREMENT, INCREMENT, RESET } from "../constants/actionTypes";

const intialState = {
    counter: 0
}
export const counterReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return { ...state, counter: state.counter + payload }
        case DECREMENT:
            return { ...state, counter: state.counter - payload }
        case RESET:
            return { ...state, counter: 0 }
        case ADD_INITIAL:
            return { ...state, counter: state.counter +payload }
        default:
            return state
    }
}