import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function CompA(){
    const counter = useSelector(state=>state.counter)

    return(
        <div>
            Counter from CompA: {counter}
        </div>
    )
}