import React from 'react'

const Album = ({data}) => {
    return (
        <article className="Album">
            <section className="img">
                {
                    data.image[3]["#text"].length > 0 ? 
                        <img src={data.image[3]["#text"]} alt="Album Image" />
                    : <img src="https://www.iphonefaq.org/files/styles/large/public/apple_music.jpg" alt="Album Image" />
                }
            </section>
            <section className="data">
                <h2>{data.name}</h2>
                <h3>{data.artist.name}</h3>
            </section>
        </article>
    )
}

export default Album