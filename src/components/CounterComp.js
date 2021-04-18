import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import allActions from '../actions'

function CounterComp(){
    const counter = useSelector(state=> state.counter)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=> dispatch(allActions.counterActions.increment())}>Increment</button>
            <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrement</button>
        </div>
    )
}
export default CounterComp