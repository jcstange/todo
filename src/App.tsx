import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo } from './actions'
import { TodoListItem } from './todo'

export const App : React.FC = () => {

    const todos: Todo[] = useSelector((state:TodosState) => state.todos)

    console.table(useSelector((state: TodosState) => state.todos))

    const styles = {
        app: {
            display: "inline"
        },
        input: {
            display: 'flex'
        },
        button: {
            borderWidth: 3,
            borderColor:'#000',
            backgroundColor: '#00FF00',
            padding: 10,
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
        console.log("element is not null")
        if(element.value === null) return null
        console.log("element.value is not null")
        console.log(element.value)
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
            <input type="text" name="todo" />
            <div 
                style= {styles.button} 
                onClick={() => {
                    const todo = createTodo()
                    if(todo !== null) dispatch(addTodo(todo))
                }}>
                New Item 
            </div>
        </div>
        <div style= {{...styles.button, backgroundColor: '#9999FF'}}>{todoList()}</div>
        </div>
}