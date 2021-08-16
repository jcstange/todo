
export const ADD_TODO = "ADD_TODO"
export const CHECK_TODO = "CHECK_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const UNCHECK_TODO = "UNCHECK_TODO"

export function addTodo(todo: Todo) {
    const action: TodosAction = {
        type: ADD_TODO,
        todo: todo
    }
    console.log(`type: ${action.type}`)
    return action
}

export function checkTodo(todo: Todo) {
    const action: TodosAction = {
        type: CHECK_TODO,
        todo: todo
    }
    console.log(`type: ${action.type}`)
    return action
}

export function removeTodo(todo: Todo) {
    const action: TodosAction = {
        type: REMOVE_TODO,
        todo: todo
    }
    console.log(`type: ${action.type}`)
    return action
}

export function uncheckTodo(todo: Todo) {
    const action: TodosAction = {
        type: UNCHECK_TODO,
        todo: todo
    }
    console.log(`type: ${action.type}`)
    return action
}
