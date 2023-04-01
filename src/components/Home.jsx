import React, { useEffect, useState } from 'react'

const Home = () => {

    let BASE_URL = "http://ws.audioscrobbler.com/2.0"
    let API_KEY = "api_key=c360d63db0da100b508415c5bd8197fe"

    const [Albums, setAlbums] = useState()
    const [LoadingAlbums, setLoadingAlbums] = useState(true)
    useEffect(() => {

    }, [LoadingAlbums])    

    return (
        <section className='Home'>
            <section className="menu">
                <h1>menu</h1>
            </section>
            <section className="content">
                <h2>content</h2>
            </section>
        </section>
    )
}

export default Home