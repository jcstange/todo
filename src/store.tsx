import { createStore, Store, applyMiddleware } from 'redux'
import { todoReducer } from './reducers'
import thunk from 'redux-thunk'


export const store : Store<TodosState, TodosAction> & { 
    dispatch: DispatchType 
} = createStore(
    todoReducer,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch