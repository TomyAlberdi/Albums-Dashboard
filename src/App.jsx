import './Scss/App.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Albums from './components/pages/Albums';
import { Routes, Route } from 'react-router-dom';
import Album_Detail from './components/pages/Album_Detail';
import { useEffect, useState } from 'react';

function App() {

    let BASE_URL = "https://ws.audioscrobbler.com/2.0"
    let API_KEY = "api_key=c360d63db0da100b508415c5bd8197fe"
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
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path='/Albums-Dashboard' element={ 
                        <Albums 
                            BASE_URL={BASE_URL} 
                            API_KEY={API_KEY} 
                            Data={Data} 
                            LoadingData={LoadingData} 
                            Period={Period}  
                            setPeriod={setPeriod}
                            options={options}
                        />} 
                    />
                    <Route path='/Albums-Dashboard/Album-Details' element={ 
                        <Album_Detail 
                            BASE_URL={BASE_URL}
                            API_KEY={API_KEY}
                        />} 
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
