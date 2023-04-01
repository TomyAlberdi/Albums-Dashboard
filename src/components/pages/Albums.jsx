import React, { useEffect, useState } from 'react'
import Album from '../utils/Album'

const Albums = ({BASE_URL,API_KEY}) => {
    
    const METHOD = "?method=user.gettopalbums&user=tomyalberdi"
    const [Period, setPeriod] = useState("1month")
    const [Data, setData] = useState()
    const [LoadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            let url = `${BASE_URL}/${METHOD}&${API_KEY}&format=json&period=${Period}&limit=48`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.topalbums.album)
                setLoadingData(false)
            })
        }
        fetchData()
    }, [LoadingData,Period])

    const changePeriod = () => {
        setPeriod(document.querySelector("#period").value)
    }
    
    return (
        <section className='Albums'>
            <section className="filter">
                <select name="period" id="period" defaultValue="1month" onChange={changePeriod}>
                    <option value="7day">Past 7 days</option>
                    <option value="1month">Past month</option>
                    <option value="3month">Past 3 months</option>
                    <option value="6month">Past 6 months</option>
                    <option value="12month">Past year</option>
                    <option value="overall">All Time</option>
                </select>
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