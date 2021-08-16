
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export function increment(number: number) {
    const action: IncrementAction = {
        type: INCREMENT,
        number: number
    }
    console.log(`type: ${action.type}`)
    return action
}

export function decrement(number: number) {
    const action: IncrementAction = {
        type: DECREMENT,
        number: number
    }
    console.log(`type: ${action.type}`)
    return action
}
