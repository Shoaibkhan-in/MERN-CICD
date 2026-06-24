import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const handleNavigating =()=>{
        navigate("/register")
    }
    return (
        <div>
            <span>this is login page</span>
            <button onClick={handleNavigating}>register</button>
        </div>
    )
}

export default Login
