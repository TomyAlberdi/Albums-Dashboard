import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Album_Detail = ({BASE_URL,API_KEY}) => {

    const location = useLocation()
    const data = location?.state?.data

    const METHOD = `?method=album.getinfo`

    const [Data, setData] = useState()
    const [LoadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            let url = `${BASE_URL}/${METHOD}&${API_KEY}&artist=${data.artist.name}&album=${data.name}&format=json`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.album)
                setLoadingData(false)
            })
        }
        fetchData()
    }, [LoadingData])
    
    if (LoadingData) {
        return (
            <article className="Album_Detail">
                <section className="content">
                    <h2 className='loadingMsg'>Cargando Álbum</h2>
                </section>
            </article>
        )
    } else {
        return (
            <article className="Album_Detail">
                <section className="content">
                    <section className="div1 img">
                        <img src={Data.image[5]["#text"]} alt="Album Image" />
                    </section>
                    <section className="div2 name">
                        <h1>{Data.name}</h1>
                    </section>
                    <section className="div3 artist">
                        <h2>{Data.artist}</h2>
                    </section>
                    <section className="div4 date">
                        <h3><i className="fa-solid fa-calendar"></i> {Data.wiki.published.substring(0, 11)}</h3>
                    </section>
                    <section className="div5 tags">
                        {
                            Data.tags.tag[0]?
                                <h4>
                                    <i className="fa-solid fa-tag"></i>
                                    {Data.tags.tag[0].name}
                                </h4>
                            :<></>
                        }
                        {
                            Data.tags.tag[1]?
                                <h4>
                                    <i className="fa-solid fa-tag"></i>
                                    {Data.tags.tag[1].name}
                                </h4>
                            :<></>
                        }
                        {
                            Data.tags.tag[2]?
                                <h4>
                                    <i className="fa-solid fa-tag"></i>
                                    {Data.tags.tag[2].name}
                                </h4>
                            :<></>
                        }
                        {
                            Data.tags.tag[3]?
                                <h4>
                                    <i className="fa-solid fa-tag"></i>
                                    {Data.tags.tag[3].name}
                                </h4>
                            :<></>
                        }
                    </section>
                    <section className="div6 tracks">
                        <h2>Tracks</h2>
                        <ol>
                            {
                                Data.tracks.track.map((e,index) => {
                                    return <li key={index}>
                                        {e.name} - {Math.floor(e.duration/60)}:{(e.duration%60).toString().padStart(2,'0')}
                                    </li>
                                })
                            }
                        </ol>
                    </section>
                    <section className="div7 playcount">
                        <h3>
                            <i className="fa-solid fa-hashtag"></i>
                            <i className="fa-solid fa-play"></i>
                            {parseInt(Data.playcount).toLocaleString('de-DE')}
                        </h3>
                    </section>
                    <section className="div8 listeners">
                        <h3>
                            <i className="fa-solid fa-headphones"></i>
                            <i className="fa-solid fa-user"></i>
                            {parseInt(Data.listeners).toLocaleString('de-DE')}
                        </h3>
                    </section>
                </section>
            </article>
        )
    }
}

export default Album_Detail