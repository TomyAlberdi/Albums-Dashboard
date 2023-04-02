import React, { useEffect, useState } from 'react'
import Album from '../utils/Album'
import Select from 'react-select';

const Albums = ({BASE_URL,API_KEY}) => {
    
    const METHOD = "?method=user.gettopalbums&user=tomyalberdi"

    const options = [
        { value: '7day', label: 'Past 7 days'},
        { value: '1month', label: 'Past month'},
        { value: '3month', label: 'Past 3 months'},
        { value: '6month', label: 'Past 6 months'},
        { value: '12month', label: 'Past year'},
        { value: 'overall', label: 'All Time'},
    ]

    const [Period, setPeriod] = useState(options[0])

    const [Data, setData] = useState()
    const [LoadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            let url = `${BASE_URL}/${METHOD}&${API_KEY}&format=json&period=${Period.value}&limit=48`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.topalbums.album)
                setLoadingData(false)
            })
        }
        fetchData()
    }, [LoadingData,Period])
    
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