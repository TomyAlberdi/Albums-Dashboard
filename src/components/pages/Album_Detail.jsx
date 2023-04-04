import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Album_Detail = () => {

    const location = useLocation()
    const data = location?.state?.data
    
    return (
        <article className="Album_Detail">
            <h2>{data.name}</h2>
        </article>
    )
}

export default Album_Detail