import { 
    ADD_TODO, 
    REMOVE_TODO,
    CHECK_TODO,
    UNCHECK_TODO,
    LOAD_TODOS
} from "./actions";

const initialState : TodosState = {
    type: 'InitialState',
    todos: []
}

export const todoReducer = (
    state: TodosState = initialState,
    action: TodosAction
): TodosState => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, 
                type: ADD_TODO, 
                todos: [...state.todos, action.todo!]}
        case REMOVE_TODO:
            return {...state, 
                type: REMOVE_TODO, 
                todos: state.todos.filter((i) => i.id !== action.todo!.id)
            }
        case CHECK_TODO:
            return {...state, type: CHECK_TODO, todos: 
                state.todos.map((i) => 
                    i.id === action.todo!.id ? {...i, isChecked: true } : i 
                )            
            }
        case UNCHECK_TODO:
            return {...state, type: UNCHECK_TODO, todos:
                state.todos.map((i) => 
                    i.id === action.todo!.id ? {...i, isChecked: false } : i 
                )            
            }
        case LOAD_TODOS:
            return {...state, type: LOAD_TODOS, todos: action.todos!}
    }
    return state
}