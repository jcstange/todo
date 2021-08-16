import { createStore, Store, applyMiddleware } from 'redux'
import { incrementReducer } from './reducers'
import thunk from 'redux-thunk'


export const store : Store<IncrementState, IncrementAction> & { 
    dispatch: DispatchType 
} = createStore(
    incrementReducer,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch