type Todo = {
    id: number,
    isChecked: boolean,
    description: string
}

type TodosAction = {
    type: string,
    todo: Todo
}

type TodosState = {
    type: string,
    todos: Todo[]
}

type DispatchType = (args: TodosAction) => TodosAction 
