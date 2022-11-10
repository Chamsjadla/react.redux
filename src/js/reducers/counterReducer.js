import { DECREMENT, INCREMENT } from "../constants/counterConst";

const initialState = {
    counter: 0,
    show: true
}

export const counterReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case INCREMENT:
            return { ...state, counter: state.counter + payload }
        case DECREMENT:
            return { ...state, counter: state.counter - payload }
        default:
            return state
    }
}