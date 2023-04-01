import React, { useEffect, useState } from 'react'

const Albums = ({BASE_URL,API_KEY}) => {
    return (
        <section className='Albums'>
            <section className="filter">
                <h2>Filter</h2>
            </section>
            <section className="content">
                <h2>Albums</h2>
            </section>
        </section>
    )
}

export default Albums