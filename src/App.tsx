import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { increment, decrement } from './actions'

export const App : React.FC = () => {
    const number: number = useSelector((state:IncrementState) => state.number)
    console.log(useSelector((state: IncrementState) => state.type))
    const styles = {
        app: {
            display: "flex"
        },
        button: {
            borderWidth: 3,
            borderColor:'#000',
            backgroundColor: '#00FF00',
            padding: 10,
        }
    }
    const dispatch: Dispatch<any> = useDispatch()
    return <div style={styles.app}>
        <div style= {{...styles.button, backgroundColor: '#9999FF'}}>{number}</div>
        <div 
            style= {styles.button} 
            onClick={() => {
                dispatch(increment(number))
            }}>
                Increment
            </div>
        <div 
            style= {{...styles.button, backgroundColor: '#FF0000'}} 
            onClick={() => {
                dispatch(decrement(number))
            }}>
                Decrement
            </div>
        </div>
}