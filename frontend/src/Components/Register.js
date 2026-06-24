import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const handleNavigating =()=>{
        navigate("/login")
    }
    return (
        <div>
            <span>this is register page</span>
            <button onClick={handleNavigating}>login</button>
        </div>
    )
}

export default Register
