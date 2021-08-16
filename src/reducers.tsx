import { 
    INCREMENT, 
    DECREMENT 
} from "./actions";

const initialState : IncrementState = {
    type: 'InitialState',
    number: 0
}
export const incrementReducer = (
    state: IncrementState = initialState,
    action: IncrementAction
): IncrementState => {
    switch (action.type) {
        case INCREMENT:
            return {...state, type: INCREMENT, number: state.number + 1}
        case DECREMENT:
            return {...state, type: DECREMENT, number: state.number - 1}
    }
    return state
}