import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByCount } from '../redux/slices/counter'

function Home() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>this is Home page</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByCount(5))}>by count 5</button>
            

            <Outlet />
        </div>
    )
}

export default Home
