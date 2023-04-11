import React, { useEffect, useState } from 'react'
import Album from '../utils/Album'
import Skeleton from '@mui/material/Skeleton';

const Albums = ({Data, LoadingData, Period, setPeriod, options}) => {
    
    const handlePeriodChange = (e) => {
        setPeriod(e.currentTarget.id)
    }

    return (
        <section className='Albums'>
            <section className="filter">
                <button id={options[0]} onClick={handlePeriodChange} className={Period === options[0] ? "selected" : ""}>Past 7 days</button>
                <button id={options[1]} onClick={handlePeriodChange} className={Period === options[1] ? "selected" : ""}>Past month</button>
                <button id={options[2]} onClick={handlePeriodChange} className={Period === options[2] ? "selected" : ""}>Past 3 months</button>
                <button id={options[3]} onClick={handlePeriodChange} className={Period === options[3] ? "selected" : ""}>Past 6 months</button>
                <button id={options[4]} onClick={handlePeriodChange} className={Period === options[4] ? "selected" : ""}>Past Year</button>
                <button id={options[5]} onClick={handlePeriodChange} className={Period === options[5] ? "selected" : ""}>All Time</button>
            </section>
            <section className="content">
                {
                    LoadingData ? 
                        [...Array(14)].map((index) => {
                            return <Skeleton key={index} variant='rectangular' animation="wave" />
                        })
                    :
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