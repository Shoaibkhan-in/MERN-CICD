import { useEffect, useState } from "react"

export const useFetch = (url)=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
        try {
            const data = await fetch(url)
            console.log("this is data", data)
            const response =await data.json()
            setData(response)
        } catch (error) {
            setData(error.message)
        }
    }
    fetchData()
    }, [url])
    
    return data
    }