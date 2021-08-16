
import React from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { checkTodo, uncheckTodo, removeTodo } from './actions'

type TodoItemProps = {
    todo: Todo
}

export const TodoListItem: React.FC<TodoItemProps> = ({ todo }) => {
    const styles = {
        item: {
            display: 'flex',
            padding: 12
        },
        checkbox: {
            margin: 10,
            borderColor: '#000',
            borderWidth: 2,
            borderRadius: 1,
            padding: 10 
        },
        description: {
            margin: 10
        },
        removeTodo: {}
    }

    const dispatch: Dispatch<any> = useDispatch()

    return (
        <div style={styles.item}>
            {todo.isChecked 
            ? <div style={styles.checkbox}
                onClick={() => dispatch(uncheckTodo(todo))}>
                    Checked
            </div> 
            : <div style={styles.checkbox}
                onClick={() => dispatch(checkTodo(todo))}>
                    Unchecked
            </div> }
            <div style={styles.description}>
                {todo.description}
            </div>
            <div style={styles.removeTodo}
                onClick={() => dispatch(removeTodo(todo))}>
                    Remove
            </div>
        </div>
    )
}