import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../redux/hooks'
import axios from 'axios'

function UserId() {
    const { id } = useParams()

    const result = useFetch("https://api.restful-api.dev/objects")
    const data = useFetch("http://localhost:5000/api/get")
    console.log("this is data", data)
    return (
        <div>
            <span>this is user no {id}</span>
            {
                result?.map((item) => (
                    <ul key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                    </ul>
                ))
            }

            {
                data?.data?.map((d) => (
                    <ul key={d._id}>
                        <li>{d.name || d.Username}</li>
                        <li>{d.email || d.Email}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default UserId
