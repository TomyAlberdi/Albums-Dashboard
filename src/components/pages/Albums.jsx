import React, { useEffect, useState } from 'react'
import Album from '../utils/Album'

const Albums = ({BASE_URL,API_KEY}) => {
    
    const METHOD = "?method=user.gettopalbums&user=tomyalberdi"
    const PERIOD = "period=1month"

    const [Data, setData] = useState()
    const [LoadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            fetch(`${BASE_URL}/${METHOD}&${API_KEY}&format=json&${PERIOD}&limit=48`)
            .then(res => res.json())
            .then(data => {
                setData(data.topalbums.album)
                setLoadingData(false)
            })
        }
        fetchData()
    }, [LoadingData])
    
    return (
        <section className='Albums'>
            <section className="filter">
                <h2>Filter</h2>
            </section>
            <section className="content">
                {
                    LoadingData ? <h2 className="loadingMsg">Loading Albums</h2> :
                    Data.length > 0 ?
                        Data.map((e,index) => {
                            return <Album key={index} data={e} />
                        })
                    : <h2 className="loadingMsg">No Albums to Load</h2>
                }
            </section>
        </section>
    )
}

export default Albums