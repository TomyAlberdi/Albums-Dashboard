import './Scss/App.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Albums from './components/pages/Albums';
import { Routes, Route } from 'react-router-dom';

function App() {

    let BASE_URL = "http://ws.audioscrobbler.com/2.0"
    let API_KEY = "api_key=c360d63db0da100b508415c5bd8197fe"

    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path='/Albums-Dashboard' element= { <Albums BASE_URL={BASE_URL} API_KEY={API_KEY} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
