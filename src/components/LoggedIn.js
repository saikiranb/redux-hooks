import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import allActions from '../actions'

export default function LoggedIn(){
    const currentUser = useSelector(state => state.currentUser)

    const dispatch = useDispatch()

    const user = {name: "Kiran"}

    useEffect(()=>{
        dispatch(allActions.userActions.setUser(user))
    },[])

    return(
        currentUser.loggedIn ?
        <>
            <h1>Hello {currentUser.user.name} </h1>
            <button onClick={()=>dispatch(allActions.userActions.logOut())}>Logout</button>
        </>
        :
        <>
            <h1>Login</h1>
            <button onClick={()=> dispatch(allActions.userActions.setUser(user))}>Login</button>
        </>
    )
}