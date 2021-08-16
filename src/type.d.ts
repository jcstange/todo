type IncrementAction = {
    type: string,
    number: number
}

type IncrementState = {
    type: string,
    number: number
}

type DispatchType = (args: IncrementAction) => IncrementAction
