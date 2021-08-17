
import React from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { checkTodo, uncheckTodo, removeTodo } from './actions'
import { Checkbox } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import './index.css'

type TodoItemProps = {
    todo: Todo
}

export const TodoListItem: React.FC<TodoItemProps> = ({ todo }) => {
    const styles = {
        item: {
            display: 'flex',
            marginBottom: 5,
            padding: 12,
            borderStyle: 'none',
            borderWidth: 2,
            borderRadius: 5,
            justifyContent: 'space-between',
            alignContent: 'baseline',
            backgroundColor: '#eaeaea'
        },
        checkbox: {
            margin: 10,
            borderStyle: 'inset',
            borderColor: '#000',
            borderWidth: 2,
            borderRadius: 1,
            padding: 10 
        },
        description: {
            margin: 20,
            color: '#333333',
            width: '75%',
            fontFamily: 'Roboto'
        },
        removeTodo: {
            margin: 20
        }
    }

    const dispatch: Dispatch<any> = useDispatch()

    return (
        <div style={styles.item}>
            <Checkbox checked={todo.isChecked} onClick={() => 
                todo.isChecked ? dispatch(uncheckTodo(todo)) : dispatch(checkTodo(todo))}/>
            <div style={styles.description}>
                {todo.description}
            </div>
            <Delete style={styles.removeTodo}
                onClick={() => dispatch(removeTodo(todo))}>
            </Delete>
        </div>
    )
}