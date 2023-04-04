import React, { useEffect, useState } from 'react'
import Album from '../utils/Album'
import Select from 'react-select';

const Albums = ({Data, LoadingData, Period, setPeriod, options}) => {
       
    return (
        <section className='Albums'>
            <section className="filter">
                <Select
                    defaultValue={Period}
                    onChange={setPeriod}
                    options={options}
                    isSearchable={false}
                    className='custom-select'
                    styles={{
                        control: (baseStyles) => ({
                            ...baseStyles,
                            cursor: 'pointer',
                            backgroundColor: '#903749',
                            border: 'none',
                            color: '#fffcff',
                        }),
                        option: (styles, {isFocused}) => {
                            return {
                                ...styles,
                                cursor: 'pointer',
                                color: '#fffcff',
                                height: 'fit-content',
                                backgroundColor: isFocused
                                ? '#E84545'
                                : '#903749'
                            }
                        },
                        input: (styles) => ({
                            ...styles,
                            border: 'none',
                            borderRadius: '5px',
                        }),
                        placeholder: (styles) => ({
                            ...styles,
                            color: '#fffcff'
                        }),
                        singleValue: (styles) => ({
                            ...styles,
                            color: '#fffcff'
                        }),
                    }}
                />
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