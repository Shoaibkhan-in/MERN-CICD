import react, {useContext} from 'react'
import { UserContext } from '../Context/UserContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar(){
    const {user} = useContext(UserContext)
    const count = useSelector((state)=>state.counter.value)

    return (
        <>
        <p>user logged in : {user}</p>
        <Link to='/Home'>Home</Link>
        <span>count is {count}</span>
        </>
    )
}