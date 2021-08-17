import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo } from './actions'
import { TodoListItem } from './todo'
import { TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import cookie from 'react-cookies'

export const App : React.FC = () => {

    var todos: Todo[] = useSelector((state:TodosState) => {
        if(state.type === "InitialState") {
            const json : Todo[] = cookie.load('todos') as Todo[]
            console.log(`load cookie => ${json}`)
            if (json !== null && json.length > 0) {
                return todos = json ?? state.todos 
            }
        }
        const json = JSON.stringify(state.todos)
        console.log(`save cookie => ${json}`)
        cookie.save('todos', json,{ path: '/'} ) 
        return state.todos
    })

    console.table(useSelector((state: TodosState) => state.todos))

    const styles = {
        app: {
            display: 'block',
            width:'90%',
            marginLeft: '5%'
        },
        input: {
            display: 'flex',
            padding: 10,
            alignContent: 'baseline'
        },
        list: {
            display: 'inline',
            margin: 10
        },
        textfield: {
            display: 'flex',
            width: '100%',
            marginRight: 10
        },
        button: {
            borderStyle: 'none',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#3A3A3A',
            color: '#FFF',
            padding: 15,
        }
    }

    const dispatch: Dispatch<any> = useDispatch()

    function todoList() {
        return (<div>
            {todos.map((i) => <TodoListItem todo={i}/>)}
        </div>)
    }

    function createTodo() : Todo | null {
        const element : HTMLInputElement = document.getElementsByName('todo')[0] as HTMLInputElement
        if(element === null) return null
        if(element.value === null) return null
        if(element.value.length > 0) {
            return {
                id: todos.length > 0 ? Math.max(...todos.map((i) => i.id)) + 1 : 0,
                isChecked:false, 
                description: element.value
            }
        }
        return null
    }


    return <div style={styles.app}>
        <div style= {styles.input}>
            <TextField type="text" label="TODO" variant="outlined" id="todo" name="todo" style={styles.textfield}/>
            <Add 
                style= {styles.button} 
                onClick={() => {
                    const todo = createTodo()
                    if(todo !== null) dispatch(addTodo(todo))
                }}> 
            </Add>
        </div>
        <div style= {styles.list}>{todoList()}</div>
        </div>
}